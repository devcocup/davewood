import React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="MdCompiler">
      <FA />
      <Header />
      <Container>
        <div className="Main" dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
      <Footer />
    </div>
  );
};

const FA = () => (
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
    integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
    crossOrigin="anonymous"
  />
);

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
