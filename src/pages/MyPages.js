import React from "react";
import { graphql } from "gatsby";
import PostLink from "../components/PostLink";

const FileIndex = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);
  return <div>{Posts}</div>;
};

export default FileIndex;

export const Pagequery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            date(formatString: "MMM DD, YY")
            title
          }
        }
      }
    }
  }
`;
