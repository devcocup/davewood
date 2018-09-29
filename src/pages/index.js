import React from "react";
import "./index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FA />
        <Header />
        <div className="Main" />
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
