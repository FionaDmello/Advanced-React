import PropTypes from "prop-types";
import Header from "./Header";

const Page = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  )
}


Page.PropTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

export default Page;