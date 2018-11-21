import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from "../components/js/Navbar";
import Footer from "../components/js/Footer";
import Sidebar from "../components/js/Sidebar";
import { CardGroup } from "../components/js/Card";

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

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
