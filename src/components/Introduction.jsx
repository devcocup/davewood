import React from 'react';
import { siteMetadata } from '../../gatsby-config';
import { CardGroup } from './Card';

class Introduction extends React.Component {
  render() {
    return (
      <div className="container">

        <section id="greeting" className="col flex-row">
          <h1><b>Welcome to {siteMetadata.title}</b></h1>
          <h5><b>Follow the links above to see samples of David's work</b></h5>
        </section>

        <section id="main" className="col flex-row">
          <CardGroup />
        </section>

        <section id="attribution" className="col flex-row">
          Information about this site can be found on <a href={siteMetadata.homePage} alt="github">Github</a>. If you notice problems with a page, please send an email to <a href={siteMetadata.contact.email} alt="prp1277@gmail.com">prp1277@gmail.com</a> or create a new issue on GitHub.
        </section>
      </div>
    );
  }
}

export default Introduction;
