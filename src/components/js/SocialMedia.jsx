import React from "react";


class SocialMedia extends React.Component {
  render() {
    return (
      <div className="SocialMedia">
        <p>Follow David on Facebook and Instagram</p>
        <ul>
          <li>
            <FbIcon />
          </li>
          <li>
            <InstaIcon />
          </li>
        </ul>
      </div>
    );
  }
}

const FbIcon = () => (
  <a href="https://www.facebook.com/Daves-Woodworking-1577530669229362/">
    <i src="./static/facebook-square-brands.svg" />
  </a>
);
const InstaIcon = () => (
  <a href="https://www.instagram.com/dtmiles1591/">
    <i src="./static/instagram-brands.svg" />
  </a>
);

export default SocialMedia;

//<a href="https://www.instagram.com/dtmiles1591/"></a>
//<a href="https://www.facebook.com/Daves-Woodworking-1577530669229362/"></a>
