import React from "react";
import { graphql } from "gatsby";
import "./index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default ({ data }) => {
  console.log(data);
  return (
    <div className="App" id="root">

      <Navbar />

      <section id="main" className="container">

        <section id="page-header" className="col-12 text-center">
          <h1 id="Page-Title">Image Reference</h1>
          <h3 id="Page-Subtitle">Note: Sizes are in W <b>|</b> H format</h3>
        </section>

        <section className="container">
          <table id="image-index" className="table table-bordered table-hover table-secondary">

            <thead>
              <tr>
                <th className="col-4 bg-danger text-white">Sizes</th>
                <th className="col-6 bg-danger text-white">Options</th>
              </tr>
            </thead>

            <tbody>
              {data.allImageSharp.edges.map(({ node }, index) => (
                <tr key={node.id} id={index}>
                  <td>{node.fluid.sizes}</td>
                  <td>{node.fluid.srcSet}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </section>

      </section>

      <Footer />

    </div>
  );
};

export const query = graphql`
  query MyFilesQuery {
  allImageSharp{
    totalCount
    edges{
      node{
        id
        fluid{
          originalName
          sizes
          srcSet
        }
      }
    }
  }
}
`;
