
const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="logo-container">
          <a href="#">
            <div className="logo"></div>
          </a>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li datacart={10}>Cart</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
