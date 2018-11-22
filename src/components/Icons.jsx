import React from "react";

const IconGroup = () => (
  <div className="container">
    <section id="Icon-Group" className="align-items-center">
      <FacebookIcon />
      <InstagramIcon />
    </section>
  </div>
);


const FacebookIcon = () => (
  <a id="icon" href="https://www.facebook.com/Daves-Woodworking-1577530669229362/">
    <i className="fab fa-facebook-square" />
  </a>
);

const InstagramIcon = () => (
  <a id="icon" href="https://www.instagram.com/dtmiles1591/">
    <i className="fab fa-instagram" />
  </a>
);

const FacebookLink = () => (
  <a className="btn btn-link" href="https://www.facebook.com/Daves-Woodworking-1577530669229362/">Facebook</a>
);

const InstagramLink = () => (
  <a className="btn btn-link" href="https://www.instagram.com/dtmiles1591/">Instagram</a>
);

export { IconGroup, FacebookIcon, FacebookLink, InstagramIcon, InstagramLink };

//<a href="https://www.instagram.com/dtmiles1591/"></a>
//<a href="https://www.facebook.com/Daves-Woodworking-1577530669229362/"></a>
