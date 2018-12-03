import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
    query AllFiles {
      allFile {
        edges {
          node {
            name
            sourceInstanceName
            relativePath
            publicURL
        }
      }
    }
  }
  `} render={(data) => (
      <div className="AllFiles">
        {data.allFile.edges.map(({ node }, index) => (
          <div key={index} id={node.name} className="py-auto">
            <a href={node.publicURL}>{node.name}</a>
          </div>
        ))}
      </div>
    )}
  />
);

export { AllFiles }
