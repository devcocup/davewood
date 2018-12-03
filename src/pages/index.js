import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLinks from "../data/PageLinks";
import { CardGroup } from "../components/Card";

class App extends React.Component {
  render() {
    return (
      <div className="App" id="root">
        <Navbar />

        <PageLinks />

        <section id="Greeting" className="text-center">
          <h1><b>Welcome to Dave's Woodworking</b></h1>
          <h5><b>Follow the links above to see samples of Dave's work</b></h5>
        </section>

        <section className="col-12" id="main">
          <CardGroup />
        </section>

        <Footer />

      </div>
    );
  }
}

export default App;
