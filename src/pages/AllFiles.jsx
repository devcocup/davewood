import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const AllFile = () => (
  <StaticQuery query={graphql`
  query {
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
      <div className="container">

        <table className="table table-sm table-bordered table-responsive table-hover table-dark">
          <thead>
            <th className="bg-danger text-light text-center">Link</th>
            <th className="bg-danger text-light text-center">Path</th>
            <th className="bg-danger text-light text-center">PublicURL</th>
          </thead>

          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index} className="py-auto">

                <td id="LINK" className="col">
                  <a href={node.publicURL}>{node.name}</a>
                </td>

                <td id="SRC" className="col">
                  <p>{node.sourceInstanceName}/{node.relativePath}</p>
                </td>

                <td id="PATH" className="col">
                  <p>.{node.publicURL}</p>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  />
);

export default AllFile;
