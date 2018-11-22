import React from "react";
import { StaticQuery, graphql } from "gatsby";

/**
 * Statefull functional component
 * <StaticQuery =`{}`
 */
const PageLinks = () => (
  <StaticQuery query={graphql`
      query {
        site {
          siteMetadata {
            siteURL
            title
          }
        }
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `} render={(data) => (
      <template>
        <div id="Page-Links" className="btn-group btn-group">
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <button className="btn btn-danger" key={index}>
              <a className="btn nav-link" href={node.fields.slug}>{node.frontmatter.title}</a>
            </button>
          ))}
        </div>
      </template>
    )}
  />
);

export default PageLinks;
