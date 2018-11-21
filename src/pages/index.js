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

        <div className="main row">
          <div className="col-2" >
            <Sidebar />
          </div>

          <div className="col-10">
            <section className="main container-fluid" id="main">
              <CardGroup />
            </section>
            <Card />
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
