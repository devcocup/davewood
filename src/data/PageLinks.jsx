import React from "react";
import { StaticQuery, graphql } from "gatsby";

/**
 * Statefull functional component
 * <StaticQuery =`{}`
 */
const PageLinks = () => (
  <StaticQuery query={graphql`
      query {
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

      <nav id="site-nav" className="nav justify-content-center">
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <div key={index} className="nav-item">
            <a className="nav-link btn btn-danger mx-2 my-1" href={node.fields.slug}>{node.frontmatter.title}</a>
          </div>
        ))}
      </nav>

    )}
  />
);

export default PageLinks;
