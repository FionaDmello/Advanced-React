import Link from "next/link"

const Nav = () => {
  return (
    <>
      <Link href="/product" >Product</Link>  
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
    </>
  )
}

export default Nav;