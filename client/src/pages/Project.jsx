import {Link, useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_PROJECT} from "../queries/projectQueries";
import ClientInfo from "../components/Clients/ClientInfo";

const Project = () => {
  const {id} = useParams();
  const {loading, error, data} = useQuery(GET_PROJECT, {variables: {id}});

  if (loading) return <h3>Loading</h3>;
  if (error) return <p>Error</p>;

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5" key={data.project.id}>
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>

          <h1>{data.project.name}</h1>

          <h5 className="mt-3">
            Description:{" "}
            <span className="lead">{data.project.description}</span>
          </h5>
          <h5 className="mt-3">
            Status: <span className="lead">{data.project.status}</span>
          </h5>

          <ClientInfo client={data.project.client} />
        </div>
      )}
    </>
  );
};

export default Project;
