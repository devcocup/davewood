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
          <div className="card bg-secondary">
            <div className="card-body">
              <h1 className="card-header text-white">Happy Holidays!</h1>
              <img src="/static/da3de3fa8e1f4f61e2d419249a994960/765ea/ToiletAngel.webp" className="img-thumbnail img-fluid" alt="" />
            </div>
          </div>
        </section>

        <section id="attribution" className="col flex-row">
          Information about this site can be found on <a href={siteMetadata.homePage} alt="github">Github</a>. If you notice problems with a page, please send an email to <a href={siteMetadata.contact.email} alt="prp1277@gmail.com">prp1277@gmail.com</a> or create a new issue on GitHub.
        </section>
      </div>
    );
  }
}

export default Introduction;

{/* <div className="card bg-secondary">
  <div className="card-body">
    <h1 className="card-header text-white">Happy Holidays!</h1>
    <img id="IntroImg" src="/static/ToiletAngel-da3de3fa8e1f4f61e2d419249a994960.png" className="card-img img-thumbnail" alt="Toilet-Angel" />
    <h3 className="card-text text-white">No one loves Christmas more than Charmin the Toiletpaper-Angel</h3>
  </div>
</div> */}
