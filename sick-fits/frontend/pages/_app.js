import Page from "../components/Page";

const App = ({ Component, PageProps }) => {
  return(
    <> 
      <Page>
        <Component {...PageProps} />
      </Page>
    </>
  )
}

export default App;