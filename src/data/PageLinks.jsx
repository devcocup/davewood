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

      <nav id="site-nav" className="nav nav-link btn-group-sm">
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <button className="btn btn-danger mx-1 my-1" key={index}>
            <a className="text-center text-white" href={node.fields.slug}>{node.frontmatter.title}</a>
          </button>
        ))}
      </nav>

    )}
  />
);

export default PageLinks;
