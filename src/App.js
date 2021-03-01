// import './App.css';
import React, { Component } from "react";
import Header from './components/Header'
import TableHead from './components/TableHead'
import TableBody from './components/TableBody'
import employees from "./employees.json";

// function App() {
//   return (
//     <div>
//       <Header />
//       <Table 
//         name={employees[0].name}
//         role={employees[0].role}
//         salary={employees[0].salary}
//         id={employees[0].id}
//       />
//     </div>
//   );
// }

// export default App;

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };

  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  // Map over this.state.employees and render a Table component for each employee object
  render() {
    return (
      <div>
        <Header>employees List</Header>
        <TableHead />
        {this.state.employees.map(employee => (
          <TableBody
            // removeemployee={this.removeemployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            // image={employee.image}
            role={employee.role}
            salary={employee.salary}
          />
        ))}
      </div>
    );
  }
}

export default App;

