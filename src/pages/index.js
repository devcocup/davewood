import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { siteMetadata } from '../../gatsby-config'
import Navbar from "../components/Navbar";
import PageLinks from "../data/PageLinks";
import Footer from "../components/Footer";
import Introduction from '../components/Introduction';

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

          <Introduction />

        </section>

        <Footer />

      </div>
    );
  }
}

export default App;
