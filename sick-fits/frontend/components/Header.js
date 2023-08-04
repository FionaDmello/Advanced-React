import PropTypes from "prop-types"

const Header = ({ children, headerMsg }) => {
  return(
    <>
    <div>
      This is the Header!
      <p>{headerMsg}</p>
    </div>
    {children}
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