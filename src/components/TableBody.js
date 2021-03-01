function TableBody(props) {
    return (
        <table className="table table-striped">
            <tbody>
            <tr>
                {/* <th scope="row">1</th> */}
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.role}</td>
                <td>{props.salary}</td>
            </tr>
            </tbody>
        </table>
    );
}
  
export default TableBody;        