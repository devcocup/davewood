import React from "react";
import { graphql } from "gatsby";
import Footer from "../components/js/Footer";
import Navbar from "../components/js/Navbar";

export default ({ data }) => {
  console.log(data);
  return (
    <div className="App">
      <Navbar />
      <div className="main row">

        <h1 className="Page-Title col-12">Image Reference</h1>
        <h3 className="Page-Subtitle col-12">Note: Sizes are in W <b>|</b> H format</h3>
        <br />

        <table className="col-10 table mx-auto table-bordered table-hover table-secondary">
          <thead>
            <tr className="bor">
              <th className="bg-danger" scope="col text-white">https://daveswoodworking.netlify.com/</th>
              <th className="bg-danger" scope="col text-white">Presentation Size</th>
              <th className="bg-danger" scope="col text-white">Original Size</th>
              <th className="bg-danger" scope="col text-white">Fixed Size</th>
            </tr>
          </thead>
          <tbody>
            {data.allImageSharp.edges.map(({ node }, index) => (
              <tr key={index}>
                <td><b>{node.original.src}</b></td>
                <td>
                  {node.fluid.presentationWidth} px <b>|</b> {node.fluid.presentationHeight} px
              </td>
                <td>
                  {node.original.width} px <b>|</b> {node.original.height} px
              </td>
                <td>
                  {node.fixed.width} px <b>|</b> {node.fixed.height} px
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query MyFilesQuery {
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
