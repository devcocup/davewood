import React from "react";
import { StaticQuery, graphql } from "gatsby";

/**
 * Statefull functional component
 * <StaticQuery =`{}`
 */
const SiteData = () => (
  <StaticQuery
    query={graphql`
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
              html
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
    `}
    render={(data) => (
      <div className="container-fluid-justified">
        <div className="btn-group btn-group">
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <button className="btn btn-group" key={index}>
              <a className="btn btn-primary" href={node.fields.slug}>{node.frontmatter.title}</a>
            </button>
          ))}
        </div>
      </div>
    )}
  />
);

export default SiteData;
