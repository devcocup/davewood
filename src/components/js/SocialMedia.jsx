import React from "react";


class SocialMedia extends React.Component {
  render() {
    return (
      <div className="media">
        <h4 className="media-heading">Follow David on Facebook and Instagram</h4>
        <div className="media-body">
          <FbIcon />
          <InstaIcon />
        </div>
      </div>
    );
  }
}

const FbIcon = () => (
  <a href="https://www.facebook.com/Daves-Woodworking-1577530669229362/">
    <img className="img-responsive" src="./static/facebook-square-brands.svg" alt="" width="48px" />
  </a>
);
const InstaIcon = () => (
  <a href="https://www.instagram.com/dtmiles1591/">
    <img className="img-responsive" src="./static/instagram-brands.svg" alt="" width="48px" />
  </a>
);

export default SocialMedia;

//<a href="https://www.instagram.com/dtmiles1591/"></a>
//<a href="https://www.facebook.com/Daves-Woodworking-1577530669229362/"></a>
