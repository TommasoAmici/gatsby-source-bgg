const { createRemoteFileNode } = require("gatsby-source-filesystem");
const { fetchCollection } = require("./dist/index");

const GAME_NODE_TYPE = "BggGame";

exports.sourceNodes = async (
  { actions, cache, createNodeId, createContentDigest },
  pluginOptions
) => {
  const { createNode } = actions;

  const cacheKey = "gatsby-source-bgg";
  let sourceData = await cache.get(cacheKey);
  if (!sourceData) {
    sourceData = await fetchCollection(pluginOptions);
    await cache.set(cacheKey, sourceData);
  }

  sourceData.forEach(game => {
    const nodeMeta = {
      id: createNodeId(`${GAME_NODE_TYPE}-${game.objectID}`),
      parent: null,
      children: [],
      internal: {
        type: GAME_NODE_TYPE,
        mediaType: `text/json`,
        content: JSON.stringify(game),
        contentDigest: createContentDigest(game),
      },
    };
    const node = Object.assign({}, game, nodeMeta);
    createNode(node);
  });
  return;
};

// called each time a node is created
exports.onCreateNode = async ({
  actions: { createNode },
  node,
  createContentDigest,
  store,
  cache,
  reporter,
}) => {
  if (node.internal.type === GAME_NODE_TYPE) {
    const args = {
      url: node.image,
      store,
      cache,
      createNode,
      createNodeId: createContentDigest,
      reporter,
    };
    const fileNode = await createRemoteFileNode(args);
    if (fileNode) {
      node["coverImage___NODE"] = fileNode.id;
    }
  }
};
