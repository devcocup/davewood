import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Card, CardGroup } from "../components/Card";

class App extends React.Component {
  render() {
    return (
      <div className="App" id="root">
        <Navbar />

        <section className="row" id="main">

          <section className="col-2 flex-column" id="side-nav">
            <Sidebar />
          </section>

          <section className="col-10 flex-column" id="content">
            <CardGroup />
            <br />
            <Card />
          </section>

        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
