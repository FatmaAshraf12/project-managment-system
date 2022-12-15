import {useQuery} from "@apollo/client";
import {GET_PROJECTS} from "../../queries/projectQueries";
import ProjectRow from "./ProjectRow";

const Projects = () => {
  const {loading, error, data} = useQuery(GET_PROJECTS);
  if (loading) return <h3>Loading</h3>;
  if (error) return <h3>error</h3>;

  return (
    <>
      {!loading && !error && (
        <div className="row">
          {data.projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      )}
    </>
  );
};

export default Projects;
