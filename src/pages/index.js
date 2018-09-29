import React from "react";
import reactDOM from "react-dom";
import Container from "./components/container";

function Index() {
  return (
    <div className="MAIN">
      <Container>{children}</Container>
    </div>
  );
}

reactDOM.render(<Index />, document.querySelector("#root"));
