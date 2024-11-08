import { Link } from "react-router-dom";
import Container from "./shared/Container";

const Header = () => {
  return (
    <header className="py-6 bg-inputs">
      <Container className="flex items-center justify-between relative">
        <Link to="/">
          <img
            srcSet="./images/logo-min.png 1x, ./images/logo@2x-min.png 2x"
            src="./images/logo-min.png"
          ></img>
        </Link>
        <nav className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <ul className="flex items-center gap-4">
            <li>
              <Link
                className="text-main font-medium transition-colors hover:text-buttonHover"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-main font-medium transition-colors hover:text-buttonHover"
                to="catalog"
              >
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
