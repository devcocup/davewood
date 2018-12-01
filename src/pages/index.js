import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLinks from "../data/PageLinks";
import { Card } from "../components/Card";

class App extends React.Component {
  render() {
    return (
      <div className="App" id="root">
        <Navbar />

        <PageLinks />


        <section className="row" id="main">
          <Card />
        </section>

        <Footer />
      </div>
    );
  }
}

export default App;
