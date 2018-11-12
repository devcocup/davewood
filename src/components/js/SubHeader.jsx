import React, { Component } from "react";

import SiteData from "./SiteData";

/**
 * Statefull Class Component
 * <div.SubHeading><SubHeader />
 */
class SubHeader extends Component {
  render() {
    return (
      <div className="SubHeader">
        <SiteData />
      </div>
    );
  }
}

export default SubHeader;

