import React from 'react';
import { siteMetadata } from '../../gatsby-config';

class Introduction extends React.Component {
  render() {
    return (
      <div className="container">

        <section id="greeting" className="col flex-row">
          <h1>Welcome to {siteMetadata.title}</h1>
          <h5>Follow the links above to see samples of David's work</h5>
        </section>

        <section id="Page" className="col flex-row">
          <div className="card bg-secondary">
            <div className="card-body">
              <h1 className="card-header text-white">Happy Holidays!</h1>
            </div>
          </div>
        </section>

        <section id="attribution" className="col flex-row">
          If you notice problems with a page, please send an email to <a href={siteMetadata.contact.email} alt="prp1277@gmail.com">prp1277@gmail.com</a>.
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
