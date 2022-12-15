import {useState} from "react";
import {useMutation} from "@apollo/client";
import {ADD_PROJECT} from "../mutations/projectMutations";
import {GET_PROJECTS} from "../queries/projectQueries";
import {useQuery} from "@apollo/client";
import {GET_CLIENTS} from "../queries/clientQueries";

const AddProject = () => {
  const {loading, error, data} = useQuery(GET_CLIENTS);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [clientId, setClientId] = useState("");

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: {name, description, status, clientId},
    update(cache, {data: {addProject}}) {
      const {projects} = cache.readQuery({query: GET_PROJECTS});

      cache.writeQuery({
        query: GET_PROJECTS,
        data: {projects: [...projects, addProject]},
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === "" || description === "" || status === "") {
      return alert("Fill all fields please");
    }

    console.log(name, description, status, clientId);
    addProject(name, description, status, clientId);

    setName("");
    setDescription("");
    setStatus("");
    setClientId("");
  };

  return (
    <>
      {!loading && !error && (
        <>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addProject"
          >
            Add Project
          </button>

          <div
            className="modal fade"
            id="addProject"
            aria-labelledby="addProjectLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="addProjectLabel">
                    Add New Project
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={onSubmit}>
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <label className="form-label" htmlFor="description">
                      Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      id="description"
                      className="form-control"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />

                    <label className="form-label" htmlFor="status">
                      Status
                    </label>
                    <select
                      id="status"
                      className="form-select"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="new">Not Started</option>
                      <option value="progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                    <label className="form-label" htmlFor="clientId">
                      Client
                    </label>
                    <select
                      id="clientId"
                      className="form-select"
                      value={clientId}
                      onChange={(e) => setClientId(e.target.value)}
                    >
                      {data.clients.map((client) => (
                        <option key={client.id} value={client.id}>
                          {client.name}
                        </option>
                      ))}
                    </select>

                    <button
                      data-bs-dismiss="modal"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddProject;
