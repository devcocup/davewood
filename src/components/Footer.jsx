import React from 'react';
import { FacebookLink, InstagramLink } from './Icons';

class Footer extends React.Component {
  render() {
    return (
      <div className="navbar navbar-dark bg-dark">
        <div className="container-fluid justify-content-center">

          <div className="navbar-header">
            <h4>Connect on <span><FacebookLink /></span>
              and <span><InstagramLink /></span>
            </h4>
          </div>

        </div>

      </div>
    );
  }
}

export default Footer;
