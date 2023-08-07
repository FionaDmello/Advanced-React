import Link from "next/link";
import PropTypes from "prop-types";
import Nav from "./Navbar";

const Header = () => {
  return(
    <>
      <div className="header-logo">
        <Link href="/">Sick Fits</Link>
      </div>
      <div className="header-nav">
        <Nav />
      </div>
      <div className="header-search">
        Search
      </div>
    </>
  )
}

Header.PropTypes = {
  headerMsg: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Header;