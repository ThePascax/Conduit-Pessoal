import { Link } from "react-router-dom";
import SourceCodeLink from "../SourceCodeLink";

function Footer() {
  return (
    <div className="container">
      <Link to="/" className="logo-font">
        My Mind
      </Link>
      <span className="attribution">
        An interactive learning project from{" "}
        <a href="https://thinkster.io">Thinkster</a>. Remade for personal use by the current user, project entirely by{" "}
        <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed
        under MIT.
      </span>

      <SourceCodeLink right />
    </div>
  );
}

export default Footer;
