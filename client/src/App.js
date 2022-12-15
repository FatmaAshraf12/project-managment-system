import Header from "./components/Header";
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";
import Clients from "./components/Clients";
import Projects from "./components/Projects";
import AddClient from "./components/AddClient";
import AddProject from "./components/AddProject";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <AddClient />
          <Clients />
          <AddProject />
          <Projects />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
