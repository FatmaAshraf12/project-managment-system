import {useQuery} from "@apollo/client";
import {GET_CLIENTS} from "../../queries/clientQueries";
import ClientRow from "./ClientRow";

const Clients = () => {
  const {loading, error, data} = useQuery(GET_CLIENTS);

  if (loading) return <h3>Loading</h3>;
  if (error) return <h3>error</h3>;

  return (
    <>
      {!loading && !error && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Clients;
