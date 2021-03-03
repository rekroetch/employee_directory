function TableBody(props) {
    return (
            <tbody>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.name}</td>
                    <td>{props.role}</td>
                    <td>{props.phone}</td>
                    <td>{props.email}</td>
                    <td>{props.dob}</td>
                </tr>
            </tbody>
        // <table className="table table-striped">
        // </table>
    );
}
  
export default TableBody;        