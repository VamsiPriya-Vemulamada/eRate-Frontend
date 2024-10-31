import { Link } from "react-router-dom";

export default function Nav () {
  return (
    // linked all the pages to appear on nav bar
    <div className="nav">
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/contact">
        <div>contact</div>
      </Link>
      <Link to="/Login">
        <div>Login</div>
      </Link>
      {/* <Link to="/Services">
        <div>Services</div>
      </Link> */}
      <Link to="/ErateCard">
        <div>eRateCard Sample</div>
      </Link>
    </div>
  );
}