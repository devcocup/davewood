import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { siteMetadata } from '../../gatsby-config'
import Navbar from "../components/Navbar";
import PageLinks from "../data/PageLinks";
import { Card, CardGroup } from "../components/Card";
import Footer from "../components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App" id="root">
        <Navbar />

        <PageLinks />

        <section id="Page" className="container bg-light text-center mx-auto">

          <section id="greeting">
            <h1><b>Welcome to {siteMetadata.title}</b></h1>
            <h5><b>Follow the links above to see samples of {siteMetadata.author}'s work</b></h5>
          </section>

          <section id="main" className="col flex-row">
            <Card />
          </section>

          <section id="attribution" className="col flex-row">
            <CardGroup />
          </section>

        </section>
        <br />

        <Footer />

      </div>
    );
  }
}

export default App;
