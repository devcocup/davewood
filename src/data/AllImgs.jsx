import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export default () => (
  <StaticQuery query={graphql`
  query MyImages {
  allImageSharp {
    edges {
      node {
        id
        original {
          src
        }
      }
      previous {
        original {
          src
        }
      }
      next {
        original {
          src
        }
      }
    }
  }
}`}
    render={(data) => (
      <div id="AllImg" className="container">
        {data.allImageSharp.edges.map(({ node }, index) => (

          <div className="card" key={node.id}>
            <img className="card-img" src={node.original.src} id={index} alt="" />
            <div className="card-body">
              <a className="card-link" href={node.original.src}>{node.original.src}</a>
            </div>
          </div>
        ))}

      </div>
    )}
  />
);

export { AllImg }
