import React from "react";
import "./SocialMedia.css";

class SocialMedia extends React.Component {
  render() {
    return (
      <div className="SocialMedia">
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
    <i className="fab fa-facebook fa-3x" />
  </a>
);
const InstaIcon = () => (
  <a href="https://www.instagram.com/dtmiles1591/">
    <i className="fab fa-instagram fa-3x" />
  </a>
);

export default SocialMedia;

//<a href="https://www.instagram.com/dtmiles1591/"></a>
//<a href="https://www.facebook.com/Daves-Woodworking-1577530669229362/"></a>
