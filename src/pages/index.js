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
          <h1>Welcome to Dave's Woodworking</h1>
          <h5>Follow the links above to see samples of Dave's work</h5>
        </section>

        <section className="mx-5 my-2" id="main">
          <CardGroup />
        </section>

        <Footer />
      </div>
    );
  }
}

export default App;
