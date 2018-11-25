import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql } from "gatsby";
import "../pages/index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLinks from "../data/PageLinks";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div id="root" className="App">
      <Navbar />

      <div className="row">
        <PageLinks />
      </div>

      <section id="main" className="row">
        <section id="content" className="col-12 d-block" dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
