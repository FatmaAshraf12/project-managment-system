import {useQuery} from "@apollo/client";
import {GET_PROJECTS} from "../queries/projectQueries";
import ProjectRow from "./ProjectRow";

const Projects = () => {
  const {loading, error, data} = useQuery(GET_PROJECTS);
  if (loading) return <h3>Loading</h3>;
  if (error) return <h3>error</h3>;

  return (
    <>
      {!loading && !error && (
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Client</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.projects.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Projects;
