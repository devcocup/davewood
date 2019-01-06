import React from "react";
import "./index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLinks from '../data/PageLinks';

class PageNotFound extends React.Component {
  render() {
    return (
      <div id="root" className="App">
        <Navbar />

        <div id="Page" className="container bg-light">
          <section id="greeting" className="col flex-row">
            <h1>Uh Oh!</h1>
            <h3>It doesn't look like that page exists.</h3>
          </section>

          <section id="main" className="flex-row">
            <div className="justify-content-center">
              <p>Try one of these links instead:</p>
              <PageLinks />
            </div>
          </section>

        </div>
        <Footer />
      </div>
    );
  }
}

export default PageNotFound;
