import Link from "next/link";
import PropTypes from "prop-types";
import Nav from "./Navbar";

import styled from "styled-components";

const StyledHeader = styled.header`
  //border: 2px solid var(--black, black);
  background: pink;
  margin: 0 ;
  display: grid;
  grid-template-columns: 1 1fr;
  .header-logo {
    background: red;
    border-bottom: 2px solid black;
    grid-item: 1/-1/1/-1;
    justify-content: center;
    
  }
  .header-nav {
    background: green;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 20px;
    border-bottom: 2px solid black;
    grid-item: 1/-1/1/-1;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  .header-search {
    background: yellow;
    border-bottom: 2px solid black;
    grid-item: 1/-1/1/-1;
    justify-content: center;
    align-items: center;
    margin: 20px
    
  }
`

const Logo = styled.h1`
  display: grid;
  justify-content: center;
  transform: skew(-7deg);
  text-transform: uppercase;

  a {
    text-decoration-line: none;
    color: white;
  }
  

`

const Header = () => {
  return(
    <>
      <StyledHeader>
        <div className="header-logo">
          <Logo>
            <Link href="/">
              Sick Fits
            </Link>
          </Logo>
        </div>
        <div className="header-nav">
          <Nav />
        </div>
        <div className="header-search">
          Search
        </div>
      </StyledHeader>
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