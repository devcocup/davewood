import React from "react";


class SocialMedia extends React.Component {
  render() {
    return (
      <div className="media">
        <section className="media-body align-items-center">

          <section className="media-header">
            <h5>Follow David on Facebook and Instagram</h5>
          </section>

          <section className="media-text">
            <p>Questions? Comments?</p>
          </section>

          <section className="media-icons">
            <icon className="fab fa-font-awesome fa-3x" />
            <FbIcon />
            <InstaIcon />
          </section>

        </section>
      </div>
    );
  }
}

const FbIcon = () => (
  <a href="https://www.facebook.com/Daves-Woodworking-1577530669229362/">
    <icon className="img-fluid" src="/static/facebook-square-brands.svg" alt="" width="48px" />
  </a>
);
const InstaIcon = () => (
  <a href="https://www.instagram.com/dtmiles1591/">
    <icon className="fab fa-instagram" src="/static/instagram-brands.svg" alt="" width="48px" />
  </a>
);

export default SocialMedia;

//<a href="https://www.instagram.com/dtmiles1591/"></a>
//<a href="https://www.facebook.com/Daves-Woodworking-1577530669229362/"></a>
