import {FaTrash} from "react-icons/fa";
import {DELETE_PROJECT} from "../../mutations/projectMutations";
import {useMutation} from "@apollo/client";
import {GET_PROJECTS} from "../../queries/projectQueries";

const ProjectRow = ({project}) => {
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: {id: project.id},
    refetchQueries: [{query: GET_PROJECTS}],
  });
  return (
    <div className="card col-md-3 ms-1" key={project.id}>
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p>Status:{project.status}</p>
        <a
          href={`/project/${project.id}`}
          className="card-link btn btn-primary btn-sm"
        >
          view
        </a>
        <button
          className="card-link btn btn-danger btn-sm"
          onClick={deleteProject}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectRow;
