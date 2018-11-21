import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql } from "gatsby";
import Navbar from "../components/js/Navbar";
import Footer from "../components/js/Footer";
import Sidebar from "../components/js/Sidebar";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div id="App">
      <Navbar />
      <Sidebar />
      <div className="row">
        <div className="main" id="main" dangerouslySetInnerHTML={{ __html: post.html }} />
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
