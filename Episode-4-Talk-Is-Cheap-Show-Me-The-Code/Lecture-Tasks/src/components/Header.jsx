const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo">
          <a href="/">
            <img src="../../public/logo.jpg" alt="" />
          </a>
          <span className="navbar__logo-span">InstaFood</span>
        </div>
        <ul className="navbar__nav-items">
          <li className="navbar__nav-links">
            <a href="/">Home</a>
          </li>
          <li className="navbar__nav-links">
            <a href="/">About</a>
          </li>
          <li className="navbar__nav-links">
            <a href="/">Contact Us</a>
          </li>
          <li className="navbar__nav-links">
            <a href="/">Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
