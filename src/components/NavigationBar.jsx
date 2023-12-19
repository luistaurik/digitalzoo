import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="bg-success">
          <div className="navbar-main">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/MyZoo">
              Your Zoo
            </Link>
            <Link className="link" to="https://github.com/luistaurik/digitalzoo">
              Go to project in Github
            </Link>
          </div>
      </header>
    </>
  );
};
export default Header;
