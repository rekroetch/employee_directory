function TableHead(props) {
    return (
        <thead>
          <tr>
            <th scope="col" onClick={() => {props.clickedSort("id")}}>ID <i className="fas fa-sort-down"></i></th>
            <th scope="col" onClick={() => {props.clickedSort("name")}}>Name <i className="fas fa-sort-down"></i></th>
            <th scope="col" onClick={() => {props.clickedSort("role")}}>Role <i className="fas fa-sort-down"></i></th>
            <th scope="col" onClick={() => {props.clickedSort("phone")}}>Phone Number <i className="fas fa-sort-down"></i></th>
            <th scope="col" onClick={() => {props.clickedSort("email")}}>Email <i className="fas fa-sort-down"></i></th>
            <th scope="col" onClick={() => {props.clickedSort("birthday")}}>Birthday <i className="fas fa-sort-down"></i></th>
          </tr>
        </thead>
    );
  }
  
export default TableHead;