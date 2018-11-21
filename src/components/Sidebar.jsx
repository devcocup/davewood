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
      <article id="Sidebar" className="h-100 col-2 bg-transparent">

        <section className="btn-group-vertical justify-content-around">

          <a className="btn-danger btn-lg btn-block my-1"
            id="Home" href="/">
            Home
            </a>

          <a className="btn-danger btn-lg btn-block my-1"
            id="About" href="/md/About/" >
            About
            </a>

          <a className="btn-danger btn-lg btn-block my-1"
            id="Bar" href="/md/Bar">
            Bar
            </a>

          <a className="btn-danger btn-lg btn-block my-1"
            id="Basement" href="/md/Basement/">
            Basement Wall
            </a>

          <a className="btn-danger btn-lg btn-block my-1"
            id="BosleyStorage" href="/md/BosleyStorage">
            Bosley Storage
            </a>

          <a className="btn-danger btn-lg btn-block my-1"
            id="Beverage" href="/md/BeverageStuff">
            Beer and Wine
              </a>

          <a className="btn-danger btn-lg btn-block my-1"
            id="CoffeeTables" href="/md/CoffeeTables/">
            Coffee Tables
              </a>

          <a className="btn-danger btn-lg btn-block my-1"
            href="/MyImgs/">
            Image Reference
              </a>

          <a className="btn-danger btn-lg btn-block my-1"
            href="/md/Storage/">
            Storage
              </a>

        </section>
      </article>
    );
  }

}
export default Sidebar;
