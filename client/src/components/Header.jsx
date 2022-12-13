import logo192 from "./assets/logo192.png";

const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo192} alt="logo" width="50" className="mr-2" />
            <div>Project Manager</div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
