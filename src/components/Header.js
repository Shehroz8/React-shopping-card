function Header() {
  return (
    <nav className="#1e88e5 blue darken-1">
      <div className="container nav-wrapper">
        <a href="#logo" className="brand-logo">
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#repo">Toys</a>
          </li>
          <li>
            <a href="#repo">Phone</a>
          </li>
          <li>
            <a href="#repo">Laptob</a>
          </li>
          <li>
            <a href="#repo">Cars</a>
          </li>
          <li>
            <a href="#repo">REPO</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
