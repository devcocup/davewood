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
    <div id="root">
      <Navbar />
      <PageLinks />


      <section id="main" className="container">
        <section id="content" className="col-10 mx-auto text-center" dangerouslySetInnerHTML={{ __html: post.html }} />
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
