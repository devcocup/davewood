import React from "react";
import { graphql } from "gatsby";
import "./pages/index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default ({ data }) => {
  console.log(data);
  return (
    <div className="App" id="root">

      <Navbar />

      <section id="main" className="row">

        <section id="page-header">
          <h1 id="Page-Title" className="col-12">Image Reference</h1>
          <h3 id="Page-Subtitle" className="col-12">Note: Sizes are in W <b>|</b> H format</h3>
        </section>

        <table id="image-index" className="table col-10 mx-auto table-bordered table-hover table-secondary">

          <thead>
            <tr className="row">
              <th className="bg-danger" scope="col text-white">https://daveswoodworking.netlify.com/</th>
              <th className="bg-danger" scope="col text-white">Presentation Size</th>
              <th className="bg-danger" scope="col text-white">Original Size</th>
              <th className="bg-danger" scope="col text-white">Fixed Size</th>
            </tr>
          </thead>

          <tbody>
            {data.allImageSharp.edges.map(({ node }, index) => (
              <tr key={index}>
                <td> <b>{node.original.src}</b> </td>
                <td> {node.fluid.presentationWidth} px <b>|</b> {node.fluid.presentationHeight} px </td>
                <td> {node.original.width} px <b>|</b> {node.original.height} px </td>
                <td> {node.fixed.width} px <b>|</b> {node.fixed.height} px </td>
              </tr>
            ))}
          </tbody>

        </table>

      </section>

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
