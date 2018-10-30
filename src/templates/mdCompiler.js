import React from "react";
import { graphql } from "gatsby";
import Header from "../components/js/Header";
import Footer from "../components/js/Footer";
import Container from "../components/js/Container";
import SubHeading from "../components/js/SubHeader";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="MdCompiler">
      <Header />
      <SubHeading />
      <Container>
        <div className="InnerHtml" dangerouslySetInnerHTML={{ __html: post.html }} />
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
