import React from 'react';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.state = { collapsed: false };
  };

  toggleSidebar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <div id="side-nav" className="container">

        <nav className="btn-group btn-group-vertical flex-wrap">

          <a className="btn btn-danger my-1" id="Home" href="/">
            Home
            </a>

          <a className="btn btn-danger my-1 mx-auto" id="About" href="/md/About/" >
            About
            </a>

          <a className="btn btn-danger my-1 mx-auto" id="Bar" href="/md/Bar">
            Bar
            </a>

          <a className="btn btn-danger my-1 mx-auto" id="Basement" href="/md/Basement/">
            Basement Wall
            </a>

          <a className="btn btn-danger my-1 mx-auto" id="BosleyStorage" href="/md/BosleyStorage">
            Bosley Storage
            </a>

          <a className="btn btn-danger my-1 mx-auto" id="Beverage" href="/md/BeverageStuff">
            Beer and Wine
              </a>

          <a className="btn btn-danger my-1 mx-auto" id="CoffeeTables" href="/md/CoffeeTables/">
            Coffee Tables
              </a>

          <a className="btn btn-danger my-1 mx-auto" id="ImageIndex" href="/MyImgs/">
            Image Reference
              </a>

          <a className="btn btn-danger my-1 mx-auto" id="Storage" href="/md/Storage/">
            Storage
              </a>

        </nav>
      </div>
    );
  }
}
export default Sidebar;
