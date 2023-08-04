import Header from "../components/Header";

const App = ({ Component, PageProps }) => {
  return(
    <> 
      <Header headerMsg={"Yay! I am the header prop"}>
        <Component {...PageProps} />
      </Header>
    </>
  )
}

export default App;