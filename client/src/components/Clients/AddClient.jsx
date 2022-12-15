import {useState} from "react";
import {useMutation} from "@apollo/client";
import {ADD_CLIENT} from "../../mutations/clientMutations";
import {GET_CLIENTS} from "../../queries/clientQueries";

const AddClient = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: {name, email, phone},
    update(cache, {data: {addClient}}) {
      const {clients} = cache.readQuery({query: GET_CLIENTS});

      cache.writeQuery({
        query: GET_CLIENTS,
        data: {clients: [...clients, addClient]},
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || phone === "") {
      return alert("Fill all fields please");
    }

    addClient(name, email, phone);

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addClient"
      >
        Add Client
      </button>

      <div
        className="modal fade"
        id="addClient"
        aria-labelledby="addClientLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addClientLabel">
                Add New Client
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

                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label className="form-label" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
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
  );
};

export default AddClient;
