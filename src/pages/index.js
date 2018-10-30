import React from "react";
import "./index.css";
import Header from "../components/js/Header";
import Footer from "../components/js/Footer";
import Container from "../components/js/Container";
import SubHeading from "../components/js/SubHeader";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SubHeading />
        <Container>
          <div className="Main">
            <h1>Welcome!</h1>
            <p>
              This site is a showcase of David Miles' Woodworking. Follow the
              links above to see a few of David's projects.
            </p>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
