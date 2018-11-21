import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql } from "gatsby";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div id="App">
      <Navbar />
      <Sidebar />

      <div className="row">
        <div className="main mx-auto" id="main" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
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
