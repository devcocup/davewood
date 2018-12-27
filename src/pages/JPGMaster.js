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
  const JPG = data.allFile.edges;
  return (
    <div className="App" id="root">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
      </Helmet>
      <Navbar />

      <PageLinks />

      <div id="Page" className="container bg-light">
        {JPG.map(({ node }, index) => (
          <div id={index} key={node.id} className="row btn-group-sm my-1 justify-content-center">
            <p className="col">{node.name}</p>
            <p>{node.childImageSharp.fluid.srcWebp}</p>
          </div>
        ))}
      </div>

      <Footer />

    </div>
  );
}


export const JPGquery = graphql`
query JPGMaster {
  allFile(filter: { extension: { eq: "jpg"} }){
    edges {
      node {
        id
        name
        relativeDirectory
        publicURL
        childImageSharp {
          fluid {
            srcWebp
          }
        }
      }
    }
  }
}
`;
