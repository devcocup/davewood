import React from "react";
import facebook from '../img/FontAwesomeSVGs/facebook.svg';
import instagram from '../img/FontAwesomeSVGs/instagram.svg';
import home from '../img/FontAwesomeSVGs/home-solid.svg';

/**
 * Class Component
 * <SiteTitle /><HomeButton />
 */
class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container text-center">

          <div className="navbar-text text-light align-self-center">
            <h2 className="navbar-header"><a href="/">Dave's Woodworking</a></h2>
          </div>

          <div className="nav-link">
            <img src={home} width="36px" className="mx-2" alt="home" />
            <img src={facebook} width="36px" className="mx-2" alt="facebook" />
            <img src={instagram} width="36px" className="mx-2" alt="instagram" />
          </div>

        </div>

      </nav>
    );
  }
}

export default Navbar;

// const Brand = () => <h1 className="navbar-header">Dave's Woodworking</h1>;
