import React, { Component } from "react";

import SiteData from "./SiteData";

/**
 * Statefull Class Component
 * <div.SubHeading><SubHeader />
 */
class SubHeading extends Component {
  render() {
    return (
      <div className="SubHeading">
        <SubHeader />
      </div>
    );
  }
}

export default SubHeading;

const SubHeader = () => (
  <div className="ProjectList">
    <SiteData />
  </div>
);
