import React from "react";
//import "./index.css";
//import Navbar from "../components/js/Navbar";
import Footer from "../components/js/Footer";
import Container from "../components/js/Container";
import SubHeader from "../components/js/SubHeader";


class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container" style={{ margin: `3rem`, textAlign: `center`, maxWidth: `600px` }}>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <h1 className="navbar-header">
                <a className="navbar-brand" href="/">Dave's Woodworking</a>
              </h1>
            </div>
          </nav>

          <SubHeader />

          <Container>
            <h1>Welcome!</h1>
            <p>
              This site is a showcase of David Miles' Woodworking. Follow the
              links above to see a few of David's projects.
            </p>
          </Container>

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
