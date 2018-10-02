import React from "react";
import { Link } from "gatsby";

const PostLink = ({ post }) => (
  <div>
    <Link to={post.slug}>
      <b>{post.frontmatter.title}</b> - {post.frontmatter.date}
    </Link>
  </div>
);
export default PostLink;
