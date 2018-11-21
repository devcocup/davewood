import React, { Component } from "react";

import PageLinks from "./PageLinks";

/**
 * Statefull Class Component
 * <div.SubHeading><SubHeader />
 */
class SubHeader extends Component {
  render() {
    return (
      <div className="SubHeader container-fluid">
        <PageLinks />
      </div>
    );
  }
}

export default SubHeader;

