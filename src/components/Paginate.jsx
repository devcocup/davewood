import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

class Paginate extends React.Component {
  render() {
    console.log(data);
    return (
      <div className="pagination">
        <ActivePage />
      </div>
    );
  }
}

const ActivePage = ({ data }) => (
  <StaticQuery query={graphql`
  query{
  allMarkdownRemark{
    edges{
      node{
        id
        fields{
          slug
        }
      }
      previous{
        fields{
          slug
        }
      }
      next{
        fields{
          slug
        }
      }
    }
  }
}
  `} render={(data) => {
      <nav className="nav-item">
        {data.allMarkdownRemark.edges.map(({ edges }, index) => {
          <div key={edges.node.id}>
            <a className="nav-link" href={edges.next.fields.slug}>Next</a>
            <a className="nav-link" href={edges.previous.fields.slug}>Previous</a>
          </div>
        })}
      </nav>
    }}
  />
);

export { Paginate, ActivePage };
