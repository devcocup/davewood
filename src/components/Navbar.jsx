import React from "react";

/**
 * Class Component
 * <SiteTitle /><HomeButton />
 */
class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-dark bg-dark">

        <div className="container-fluid">

          <div className="navbar-text text-light">
            <h2 className="navbar-header"><a href="/">Dave's Woodworking</a></h2>
          </div>

          <div id="icons" className="row text-center">
            <a className="nav-link" href="/">
              <img src="https://img.icons8.com/metro/36/ffffff/home.png" width="36px" className="img-fluid text-light" alt="home" />
            </a>
            <a className="nav-link" href="https://www.facebook.com/Daves-Woodworking-1577530669229362/">
              <img src="https://img.icons8.com/metro/50/ffffff/facebook.png" width="36px" className="mx-1" alt="facebook" />
            </a>
            <a className="nav-link" href="https://www.instagram.com/dtmiles1591/">
              <img src="https://img.icons8.com/metro/50/ffffff/instagram-new.png" width="36px" className="mx-1" alt="instagram" />
            </a>
          </div>

        </div>

      </div>
    );
  }
}

export default Navbar;

// const Brand = () => <h1 className="navbar-header">Dave's Woodworking</h1>;
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAL2SURBVGhD7ZjPi05RGMdfZYESJcnGwsavkSILdjaKMcKwUf4CUXYzK3bo3bCx8UewsJgodlJK/oUppRRlMTJD7+tz7vke3Zv7nnvOee977y33U9/ee895nuecT2biNejp6ek2o9HoFBmOx+NrWqqE2p30vCS/eB7zuUYea7s9jAQX+W0uZeD5oba8ULeslgKsn1ZJ83B+QcYRIkXNE5UXYP26SpqFs41M9uNSRpVUp4Q49KpPxuGT6oxQmQzv6+Q2+aylv7BWKsV6+0IcZmQ2dHYG70ZmQfuHSJAUa+0KcdAimSjj4D1Iivf2hDikUobnrXoMkuK5HSEOMDLrOi/DvJO8zBz5RBa1VCnFZ/NCDL9CQmS+5PaCpEizQgyOknGoJkTqqx4LsF6/EEMvk2gZh2orpcqgrl4hZl4yF7LjLeadBMk41BMtRU19QsyrRcah3igp9usRYtBFUpuMQzOCpdibXoghM5FxaFaQFOvTCTFggcxMxqGZlVKsDVUSD80XyMxlHJodIrWsknBoalTGoTPqlaJ4njQu49BZ9UhRdJ5UyRwlM5Fx6MzppNjshIxDZ6dJsXiOdEbGoTvESfF+kIWfdsvCe+syDt0lRMr+HcXDTa1l8N4ZGYfu5JXi/ZnbPEyyPyHzSTol4+AeXime72gr2zxCbpEDWkqWoWeVPOLxwaSwPyQfeI6Cng2Sl9pL7pIbbG/S8r9QkCrzjezWGC+Ub6b2ve0Mh56CVCUUJ/+Y0beiMUHQcs92xhEsRe2WVBkDvS80KghalmxnPJI6rlHlULfDlqfRpJCB8+Y1qhxqeqE8vVAvVKQXiqUX6oWK/JdC22xpGhzwWqOCoP6+WpOg/4xGTYaiaf4tZ75PndQoL9TtIatqTWWfxk2GQ56qOAn6zRext+SVJ2/Id7UkQf9HXdkPtfspXrNt3YT7Gfy/P3lMMfmh/k5hTPhY0lXDoc98LX9OCv+91RZGBN6Rs7piGgzYTuaYeaKtcP4xsktX8jAY/AG/5E9sA4xnlgAAAABJRU5ErkJggg=="></img>
