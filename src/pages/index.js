import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { siteMetadata } from '../../gatsby-config'
import Navbar from "../components/Navbar";
import PageLinks from "../data/PageLinks";
import Footer from "../components/Footer";

import { Card, CardGroup, ProjectCard } from "../components/Card";
import Logo from "../pages/img/logo.png";
//import { Paginate } from '../components/Paginate';
import Me from "../components/Me";

class App extends React.Component {
  render() {
    return (
      <div className="App" id="root">
        <Navbar />

        <PageLinks />

        <section id="Page" className="container bg-light">

          <section id="greeting" className="col flex-row">
            <h1><b>Welcome to {siteMetadata.title}</b></h1>
            <h5><b>Follow the links above to see samples of David's work</b></h5>
          </section>

          <section id="main" className="col flex-row">
            <div>This will be the main "page"</div>
          </section>

          <section id="attribution" className="col flex-row">
            <Me />
          </section>

        </section>

        <Footer />

      </div>
    );
  }
}

export default App;
