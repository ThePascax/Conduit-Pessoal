function SourceCodeLink({ left, right }) {
  const position = left ? "left" : right ? "right" : "";

  return (
    <ul className={`nav navbar-nav pull-xs-${position}`}>
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://github.com/TonyMckes/conduit-realworld-example-app"
        >
          <i className="ion-social-github"></i> Based on Conduit Project
        </a>
      </li>
    </ul>
  );
}

export default SourceCodeLink;
