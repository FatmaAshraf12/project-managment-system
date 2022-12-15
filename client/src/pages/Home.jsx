import Clients from "../components/Clients/Clients";
import Projects from "../components/Projects/Projects";
import AddClient from "../components/Clients/AddClient";
import AddProject from "../components/Projects/AddProject";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClient />
        <AddProject />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
};

export default Home;
