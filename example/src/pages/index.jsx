import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allBggGame {
        nodes {
          name
        }
      }
    }
  `);
  return (
    <>
      <h1>gatsby-source-bgg test</h1>
      <ul>
        {data.allBggGame.nodes.map(node => (
          <li>{node.name}</li>
        ))}
      </ul>
    </>
  );
}
