import { CreateNodeArgs, CreateSchemaCustomizationArgs, NodeInput, SourceNodesArgs } from "gatsby";
import { createRemoteFileNode, CreateRemoteFileNodeArgs } from "gatsby-source-filesystem";
import { fetchCollection } from "./index";

const GAME_NODE_TYPE = "BggGame";

export const sourceNodes = async (
  { reporter, cache, createNodeId, actions, createContentDigest }: SourceNodesArgs,
  pluginOptions: ICollectionParams
) => {
  const activity = reporter.activityTimer("gatsby-source-bgg");
  activity.start();

  const cacheKey = "gatsby-source-bgg";
  let sourceData: ICollection[] = await cache.get(cacheKey);
  if (!sourceData) {
    sourceData = await fetchCollection(pluginOptions);
    await cache.set(cacheKey, sourceData);
  }

  for (const game of sourceData) {
    const id = createNodeId(`${GAME_NODE_TYPE}-${game.objectID}`);
    const node: NodeInput = {
      ...game,
      id,
      parent: null,
      children: [],
      internal: {
        type: GAME_NODE_TYPE,
        mediaType: `text/json`,
        content: JSON.stringify(game),
        contentDigest: createContentDigest(game),
      },
    };
    await actions.createNode(node);
  }

  activity.setStatus(`Nodes created for ${sourceData.length} games`);
  activity.end();
  return;
};

// called each time a node is created
export const onCreateNode = async ({
  node,
  cache,
  getCache,
  actions: { createNode, createNodeField },
  createNodeId,
}: CreateNodeArgs) => {
  if (node.internal.type === GAME_NODE_TYPE) {
    const remoteFileNodeArgs: CreateRemoteFileNodeArgs = {
      url: String(node.image),
      cache,
      getCache,
      parentNodeId: node.id,
      createNode,
      createNodeId,
    };
    const fileNode = await createRemoteFileNode(remoteFileNodeArgs);
    if (fileNode) {
      createNodeField({ node, name: "coverImage", value: fileNode.id });
    }
  }
};

export const createSchemaCustomization = async (args: CreateSchemaCustomizationArgs) => {
  const { createTypes } = args.actions;
  createTypes(`
    type ${GAME_NODE_TYPE} implements Node {
      coverImage: File @link(from: "fields.coverImage")
    }`);
};
