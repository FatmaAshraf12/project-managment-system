const ClientInfo = ({client}) => {
  return (
    <div className="card w-50 mt-3">
      <div className="card-header">Client Information</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Name : {client.name}</li>
        <li className="list-group-item">ID : {client.id}</li>
        <li className="list-group-item">Email :{client.email}</li>
        <li className="list-group-item">Phone : {client.phone}</li>
      </ul>
    </div>
  );
};
export default ClientInfo;
