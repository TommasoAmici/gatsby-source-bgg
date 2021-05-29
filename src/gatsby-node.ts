import { CreateNodeArgs, CreateSchemaCustomizationArgs, NodeInput, SourceNodesArgs } from "gatsby";
import { createRemoteFileNode, CreateRemoteFileNodeArgs } from "gatsby-source-filesystem";
import { fetchCollection } from "./index";

const GAME_NODE_TYPE = "BggGame";

export const sourceNodes = async (args: SourceNodesArgs, pluginOptions: ICollectionParams) => {
  const cacheKey = "gatsby-source-bgg";
  let sourceData = await args.cache.get(cacheKey);
  if (!sourceData) {
    sourceData = await fetchCollection(pluginOptions);
    await args.cache.set(cacheKey, sourceData);
  }

  sourceData.forEach((game: ICollection) => {
    const nodeMeta = {
      id: args.createNodeId(`${GAME_NODE_TYPE}-${game.objectID}`),
      parent: null,
      children: [],
      internal: {
        type: GAME_NODE_TYPE,
        mediaType: `text/json`,
        content: JSON.stringify(game),
        contentDigest: args.createContentDigest(game),
      },
    };
    const node: NodeInput = { ...game, ...nodeMeta };
    args.actions.createNode(node);
  });
  return;
};

// called each time a node is created
export const onCreateNode = async (args: CreateNodeArgs) => {
  if (args.node.internal.type === GAME_NODE_TYPE) {
    const remoteFileNodeArgs: CreateRemoteFileNodeArgs = {
      url: String(args.node.image),
      store: args.store,
      cache: args.cache,
      createNode: args.actions.createNode,
      createNodeId: args.createContentDigest,
      reporter: args.reporter,
    };
    const fileNode = await createRemoteFileNode(remoteFileNodeArgs);
    if (fileNode) {
      args.node.coverImage = fileNode.id;
    }
  }
};

export const createSchemaCustomization = async (args: CreateSchemaCustomizationArgs) => {
  const { createTypes } = args.actions;
  createTypes(`
    type ${GAME_NODE_TYPE} implements Node {
      coverImage: File @link
    }`);
};
