import logo from "../../public/logo.jpg";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h2>INSTAFood</h2>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="cart">
        <span>Cart</span>
      </div>
    </header>
  );
};

export default Header;
