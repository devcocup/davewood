import React from "react";
import Helmet from 'react-helmet';
import { graphql } from "gatsby";
import { siteMetadata } from '../../gatsby-config';
import "./index.css";
import Navbar from "../components/Navbar";
import PageLinks from '../data/PageLinks'
import Footer from "../components/Footer";

export default ({ data }) => {
  console.log(data);
  const MD = data.allFile.edges;
  return (
    <div className="App" id="root">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
      </Helmet>
      <Navbar />

      <PageLinks />

      <section id="Page" className="container bg-light">

        <table id="MarkdownRemark" className="table table-sm table-bordered table-hover">
          <thead className="bg-danger text-white">
            <th>ID</th>
            <th>Name</th>
            <th>Public URL</th>
            <th>Title</th>
            <th>Slug</th>
          </thead>

          <tbody>
            {MD.map(({ node }, index) => (
              <tr key={node.id} id={index}>
                <td>{node.id}</td>
                <td>{node.name}</td>
                <td>{node.publicURL}</td>
                <td>{node.childMarkdownRemark.frontmatter.title}</td>
                <td>{node.childMarkdownRemark.fields.slug}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </section>

      <Footer />

    </div>
  );
}

export const MDquery = graphql`
query MDMaster{
  allFile(filter:{extension: {eq: "md"}}){
    edges {
      node{
        id
        name
        relativePath
        publicURL
        childMarkdownRemark{
          fields{
            slug
          }
          frontmatter{
            title
          }
        }
      }
    }
  }
}
`;
