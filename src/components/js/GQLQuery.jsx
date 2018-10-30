import React from 'react';
import { StaticQuery, graphql } from "gatsby";

console.log(data);
export const GQL = () => (
    <StaticQuery
        query={graphql`
    query {
        allMarkdownRemark{
    edges{
      node{
        frontmatter{
          title
          date
        }
        fields{
          slug
        }
        html
      }
    } 
  }
}`
        }
        render={(data) => (
            <div>
                {data.allMarkdownRemark.edges.map(({ node }, index) => (
                    <div key={index}>
                        <h1>{node.frontmatter.title}</h1>
                        <p>{node.html}</p>
                    </div>
                ))}
            </div>
        )}
    />
);
export default GQL;