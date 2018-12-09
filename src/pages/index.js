import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { siteMetadata } from '../../gatsby-config';
import Navbar from "../components/Navbar";
import PageLinks from "../data/PageLinks";
import Footer from "../components/Footer";
import Introduction from '../components/Introduction';
import Helmet from 'react-helmet';

class App extends React.Component {
  render() {
    return (
      <div className="App" id="root">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{siteMetadata.title}</title>
          <meta name="description" content={siteMetadata.description} />
          <link rel="canonical" href={siteMetadata.siteURL} />
        </Helmet>
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
