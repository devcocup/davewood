import React from 'react';
import { FacebookLink, InstagramLink } from './Icons';

class Footer extends React.Component {
  render() {
    return (
      <div className="navbar navbar-dark bg-dark">
        <div className="container-fluid text-center">

          <div className="navbar-header text-light">
            <h5>Connect on Facebook and Instagram</h5>
          </div>
          <FacebookLink /> <InstagramLink />

        </div>

      </div>
    );
  }
}

export default Footer;
