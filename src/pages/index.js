import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import SubHeading from "../components/SubHeader";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FA />
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

const FA = () => (
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
    integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
    crossOrigin="anonymous"
  />
);
export default App;
