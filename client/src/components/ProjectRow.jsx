import {FaTrash} from "react-icons/fa";
import {DELETE_PROJECT} from "../mutations/projectMutations";
import {useMutation} from "@apollo/client";
import {GET_PROJECTS} from "../queries/projectQueries";

const ProjectRow = ({project}) => {
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: {id: project.id},
    refetchQueries: [{query: GET_PROJECTS}],
  });
  return (
    <tr>
      <td>{project.id}</td>
      <td>{project.name}</td>
      <td>{project.description}</td>
      <td>{project.status}</td>
      <td>{project.client.name}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteProject}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ProjectRow;
