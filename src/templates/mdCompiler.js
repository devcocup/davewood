import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql } from "gatsby";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div id="root" className="App">
      <Navbar />

      <section id="main" className="row">
        <div id="Sidebar-Container" className="col-3 mx-auto my-auto">
          <Sidebar />
        </div>

        <div id="Markdown" className="col-9 mx-3 my-auto" dangerouslySetInnerHTML={{ __html: post.html }} />
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
