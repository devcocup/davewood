import React from "react";
import { graphql } from "gatsby";

/**
 * Statefull Functional Component
 */
export default ({ data }) => {
  console.log(data);
  return (
    <div className="My-Files-Content" style={{ margin: `3rem` }}>
      <h1 className="Page-Title">Image Reference</h1>
      <p>Note: Sizes are in W | H format</p>

      <table className="Images-Table">
        <thead>
          <tr>
            <th>https://daveswoodworking.netlify.com</th>
            <th>Presentation Size</th>
            <th>Original Size</th>
            <th>Fixed Size</th>
          </tr>
        </thead>
        <tbody className="Image-Details">
          {data.allImageSharp.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>{node.original.src}</td>
              <td>
                {node.fluid.presentationWidth} px |
                {node.fluid.presentationHeight} px
              </td>
              <td>
                {node.original.width} px |{node.original.height} px
              </td>
              <td>
                {node.fixed.width} px |{node.fixed.height} px
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const query = graphql`
  query ImageSize {
    allImageSharp {
      edges {
        node {
          original {
            src
            width
            height
          }
          fluid {
            originalName
            presentationWidth
            presentationHeight
          }
          fixed {
            width
            height
          }
        }
      }
    }
  }
`;
