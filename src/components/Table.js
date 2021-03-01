function Table(props) {
    return (
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{props.name}</td>
            <td>{props.role}</td>
            <td>{props.salary}</td>
          </tr>
        </tbody>
      </table>
    );
  }
  
  export default Table;