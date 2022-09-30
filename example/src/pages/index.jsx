import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import "../style/index.css";

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allBggGame(limit: 1) {
        nodes {
          name
          description
          minPlayers
          maxPlayers
          playingTime
          maxPlayTime
          minPlayTime
          minAge
          yearPublished
          numPlays
          objectType
          subType
          status {
            forTrade
            lastModified
            own
            preOrdered
            prevOwned
            want
            wantToBuy
            wantToPlay
            wishlist
          }
          suggestedNumPlayers {
            numPlayers
            best
            recommended
            notRecommended
          }
          suggestedPlayerAge {
            _2
            _3
            _4
            _5
            _6
            _8
            _10
            _12
            _14
            _16
            _18
            _21
          }
          languageDependence {
            _1 {
              helpText
              votes
            }
            _2 {
              helpText
              votes
            }
            _3 {
              helpText
              votes
            }
            _4 {
              helpText
              votes
            }
            _5 {
              helpText
              votes
            }
          }
          coverImage {
            childImageSharp {
              regular: gatsbyImageData(height: 256, width: 256)
              gray: gatsbyImageData(height: 256, width: 256, transformOptions: { grayscale: true })
              rotated: gatsbyImageData(height: 256, width: 256, transformOptions: { rotate: 90 })
            }
          }
        }
      }
    }
  `);
  const node = data.allBggGame.nodes[0];
  const image = getImage(node.coverImage.childImageSharp.regular);
  const imageGray = getImage(node.coverImage.childImageSharp.gray);
  const imageRotated = getImage(node.coverImage.childImageSharp.rotated);

  const fields = [
    "name",
    "minPlayers",
    "maxPlayers",
    "playingTime",
    "maxPlayTime",
    "minPlayTime",
    "minAge",
    "yearPublished",
    "numPlays",
    "objectType",
    "subType",
    "status",
    "suggestedNumPlayers",
    "suggestedPlayerAge",
    "languageDependence",
    "description",
  ];

  return (
    <>
      <h1>gatsby-source-bgg example</h1>
      <div className="card">
        <div className="images">
          <GatsbyImage image={image} alt={node.name} />
          <GatsbyImage image={imageGray} alt={node.name} />
          <GatsbyImage image={imageRotated} alt={node.name} />
        </div>
        <ul className="fields">
          <li className="row">
            <span className="field-name">coverImage</span>
            <span className="field-value">childImageSharp</span>
          </li>
          {fields.map(field => (
            <li className="row">
              <span className="field-name">{field}</span>
              <span className="field-value">{JSON.stringify(node[field], null, 2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
