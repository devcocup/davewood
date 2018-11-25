import React from "react";

const IconGroup = () => (
  <section id="Icon-Group" className="align-items-center">
    <FacebookIcon />
    <InstagramIcon />
  </section>
);


const FacebookIcon = () => (
  <a id="icon" href="https://www.facebook.com/Daves-Woodworking-1577530669229362/">
    <i className="fa fa-facebook-official"></i>
  </a>
);

const InstagramIcon = () => (
  <a id="icon" href="https://www.instagram.com/dtmiles1591/">
    <i className="fa fa-instagram"></i>
  </a>
);

const FacebookLink = () => (
  <a className="btn btn-outline-primary" href="https://www.facebook.com/Daves-Woodworking-1577530669229362/"> Facebook </a>
);

const InstagramLink = () => (
  <a className="btn btn-outline-primary" href="https://www.instagram.com/dtmiles1591/"> Instagram </a>
);

export { IconGroup, FacebookIcon, FacebookLink, InstagramIcon, InstagramLink };

//<a href="https://www.instagram.com/dtmiles1591/"></a>
//<a href="https://www.facebook.com/Daves-Woodworking-1577530669229362/"></a>
