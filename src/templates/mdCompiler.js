import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/js/Navbar";
import Footer from "../components/js/Footer";
import Container from "../components/js/Container";
import SubHeading from "../components/js/SubHeader";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="container-fluid shadow-lg p-4 mb-4 bg-white">
      <Navbar />
      <SubHeading />
      <Container className="container shadow-lg p-4 mb-4 bg-white">
        <div style={{ margin: `3rem`, textAlign: `center` }} dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
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
