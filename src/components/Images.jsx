import React from "react";
import { graphql } from "gatsby";

const Images = ({ data }) => {
  return (
    <div className="GalleryContainer">
      <h1>Image Gallery</h1>

      <div className="TableContainer">
        <table>
          <tbody>
            {data.allImageSharp.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={node.original.src}
                    alt="img"
                    height={node.fixed.height}
                    width={node.fixed.width}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Images;

export const GalleryQuery = graphql`
  query ImageGallery {
    allImageSharp {
      edges {
        node {
          fixed {
            width
            height
          }
          original {
            src
            height
            width
          }
          fluid {
            sizes
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  }
`;
