const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <img src="../../public/logo.jpg" alt="" />
          </a>
          <span className="logo-span">InstaFood</span>
        </div>
        <ul className="nav-items">
          <li className="nav-links">
            <a href="/">Home</a>
          </li>
          <li className="nav-links">
            <a href="/">About</a>
          </li>
          <li className="nav-links">
            <a href="/">Contact Us</a>
          </li>
          <li className="nav-links">
            <a href="/">Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
