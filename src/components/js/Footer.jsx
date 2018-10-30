import React, { Component } from "react";

import SocialMedia from "./SocialMedia";

/**
 * Stateless Class-Component
 * <Footer><SocialMedia />
 */
class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <SocialMedia />
      </div>
    );
  }
}
export default Footer;
