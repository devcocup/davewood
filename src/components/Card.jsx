import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div id="card" className="card mx-auto my-auto p-2 bg-light">
        {/** {this.props.image} */}
        <img
          id="card-image"
          className="card shadow-lg img-fluid"
          src="https://picsum.photos/300/200/?random"
          alt="" />

        {/** {this.props.body} */}
        <div id="card-body" className="card-body text-center">

          {/* {this.props.title} */}
          <h3 id="card-title" className="card-title">Card Title</h3>

          {/** {this.props.summary} */}
          <p id="card-text" className="card-text text-truncate">Card Text</p>

          {/** {this.props.url} */}
          <a id="card-link" href="/" className="btn btn-danger btn-block">Link</a>

        </div>

      </div>
    );
  }
};

const CardGroup = () => {
  return (
    <div id="card-group" className="card-group">
      <Card /><br />
      <Card /><br />
      <Card /><br />
      {/* <Card /><br /> */}
    </div>
  );
}

export { CardGroup, Card };
