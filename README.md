<p align="center">
  <img src="https://raw.githubusercontent.com/tommasoamici/gatsby-source-bgg/main/.github/readme/gatsby-logo.svg" alt="Gatsby">
  <img src="https://raw.githubusercontent.com/tommasoamici/gatsby-source-bgg/main/.github/readme/plus.svg" alt="+">
  <img src="https://raw.githubusercontent.com/tommasoamici/gatsby-source-bgg/main/.github/readme/bgg-logo.svg" alt="BoardGameGeek">
</p>

# gatsby-source-bgg

Source plugin for pulling game collections from BoardGameGeek into Gatsby.
It creates links between entry types and assets (e.g. cover images) so they can be queried in Gatsby using GraphQL.

## At a glance

[![Node.js CI](https://github.com/TommasoAmici/gatsby-source-bgg/actions/workflows/build.yml/badge.svg)](https://github.com/TommasoAmici/gatsby-source-bgg/actions/workflows/build.yml) ![Minzipped bundle size](https://img.shields.io/bundlephobia/minzip/gatsby-source-bgg) ![npm version](https://img.shields.io/npm/v/gatsby-source-bgg)

## Getting started

First, install the package

```sh
# npm install gatsby-source-bgg
yarn add gatsby-source-bgg
```

Then, in your `gatsby-config.js` add the plugin and configure it with all the filters and options you like.
The only required field is `username`. Here you can find [a complete list of options](./src/pluginOptions.ts).

The options are a 1:1 mapping of the API options you can find on [BoardGameGeek's documentation](https://boardgamegeek.com/wiki/page/BGG_XML_API2#Collection).

```js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-bgg",
      options: {
        username: "tommasoamici",
        own: 1,
      },
    },
  ],
};
```

You will then be able to query the games as usual with GraphQL queries, e.g.

```graphql
query GamesList {
  games: allBggGame {
    edges {
      node {
        name
        numPlays
        coverImage {
          childImageSharp {
            gatsbyImageData(height: 256, width: 256, formats: [AUTO, WEBP])
          }
        }
      }
    }
  }
}
```

Example output:

```json
{
  "data": {
    "games": {
      "edges": [
        {
          "node": {
            "name": "7 Wonders Duel",
            "numPlays": 5,
            "coverImage": {
              "childImageSharp": {
                "gatsbyImageData": {
                  "layout": "constrained",
                  "backgroundColor": "#282828",
                  "images": {
                    "fallback": {
                      "src": "/static/283f546e590850a05dfea6196db90991/68974/pic3376065.jpg",
                      "srcSet": "/static/283f546e590850a05dfea6196db90991/d4a57/pic3376065.jpg 64w,\n/static/283f546e590850a05dfea6196db90991/19e71/pic3376065.jpg 128w,\n/static/283f546e590850a05dfea6196db90991/68974/pic3376065.jpg 256w,\n/static/283f546e590850a05dfea6196db90991/3c367/pic3376065.jpg 512w",
                      "sizes": "(min-width: 256px) 256px, 100vw"
                    },
                    "sources": [
                      {
                        "srcSet": "/static/283f546e590850a05dfea6196db90991/8257c/pic3376065.webp 64w,\n/static/283f546e590850a05dfea6196db90991/6766a/pic3376065.webp 128w,\n/static/283f546e590850a05dfea6196db90991/22bfc/pic3376065.webp 256w,\n/static/283f546e590850a05dfea6196db90991/d689f/pic3376065.webp 512w",
                        "type": "image/webp",
                        "sizes": "(min-width: 256px) 256px, 100vw"
                      }
                    ]
                  },
                  "width": 256,
                  "height": 256
                }
              }
            }
          }
        }
      ]
    }
  },
  "extensions": {}
}
```

## Found a bug?

Please file a report in [this repository's issues](https://github.com/TommasoAmici/gatsby-source-bgg/issues)

## Development

If you want to contribute to this project, that's great to hear!

You can start at [CONTRIBUTING.md](./CONTRIBUTING.md).
