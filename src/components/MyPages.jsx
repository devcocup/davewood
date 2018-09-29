import React from "react";
import { graphql } from "gatsby";

const MyPages = ({ data }) => {
  return (
    <div className="MyPages">
      <h1> Index </h1>

      <div className="TableContainer">
        <table>
          <thead>
            <tr>
              <td> Index </td>
              <td> Base </td>
              <td> URL </td>
            </tr>
          </thead>

          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativeDirectory}</td>
                <td>{node.base}</td>
                <td>{node.publicURL}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPages;

export const query = graphql`
  query MyPages {
    allFile {
      edges {
        node {
          relativeDirectory
          base
          publicURL
        }
      }
    }
  }
`;
