import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FA />
        <Header />
        <Container>
          <div className="Main">
            <h1>Welcome!</h1>
            <p>
              This site is a showcase of David Miles' Woodworking. Follow the
              links below to see a few of David's projects.
            </p>
          </div>
          <div className="PageLinks">
            <h3>
              <a href={"./md/Bar"}> Bar </a>
            </h3>

            <h3>
              <a href={"./md/Basement"}> Basement Renovations </a>
            </h3>

            <h3>
              <a href={"./md/BosleyStorage"}> Bosley's Storage </a>
            </h3>

            <h3>
              <a href={"./md/CoffeeTables"}> Coffee Tables </a>
            </h3>

            <h3>
              <a href={"./md/Storage"}> Storage </a>
            </h3>

            <h3>
              <a href={"./md/BeverageStuff"}> Beverage Stuff </a>
            </h3>

            <h3>
              <a href={"./md/ShelvesAndHangers"}> Shelves and Wall Decor </a>
            </h3>
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
