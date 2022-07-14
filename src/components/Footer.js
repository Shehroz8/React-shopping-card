function Footer() {
  return (
    <footer className="page-footer #1e88e5 blue darken-1">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#repo">
            REPO
          </a>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
