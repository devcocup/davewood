import React from "react";

class Card extends React.Component {
  render() {
    return (

      <div id="Card"
        className="card mx-2 my-2 p-2 shadow-md bg-light">

        <img
          id="card-image"
          className="card shadow-lg img-fluid"
          src="https://picsum.photos/300/200/?random"
          alt="" />

        <div
          id="card-body"
          className="card-body text-center">

          <h3 id="card-title"
            className="card-title"
          >Card Title</h3>

          <p id="card-text"
            className="card-text text-truncate"
          >Card Text</p>

          <a href="/" className="btn btn-danger btn-block" >Link</a>

        </div>

      </div>
    );
  }
};

const CardGroup = () => {
  return (
    <div id="card-group" className="row mx-2">

      <div className="card-deck">
        <Card />
        <Card />
      </div>
    </div>

  );
}

export { CardGroup, Card };
