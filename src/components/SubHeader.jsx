import React, { Component } from "react";
//import { Link } from "gatsby";
import "./SubHeader.css";
import SiteData from "./SiteData";

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
    {/* <ul>
      <li>
        <Link to="./md/Bar"> -Bar </Link>
      </li>
      <li>
        <Link to="./md/Basement"> -Basement </Link>
      </li>
      <li>
        <Link to="./md/BeverageStuff"> -Beverage </Link>
      </li>
      <li>
        <Link to="./md/BosleyStorage"> -Bosley </Link>
      </li>
      <li>
        <Link to="./md/CoffeeTables"> -Coffee Tables </Link>
      </li>
      <li>
        <Link to="./md/ShelvesAndHangers"> -Shelves </Link>
      </li>
      <li>
        <Link to="./md/Storage"> -Storage </Link>
      </li>
      <li>
        <Link to="./md/About"> -About This Site </Link>
      </li>
    </ul> */}
  </div>
);
