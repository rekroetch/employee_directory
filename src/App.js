import React, { Component } from "react";
import Header from './components/Header'
import TableHead from './components/TableHead'
import TableBody from './components/TableBody'
import Search from './components/Search'
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees,
    search: "" 
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  formSubmit = (e) => {
    e.preventDefault()
    // Filter this.state.employees for employees with a role not equal to the role searched
    const employees = this.state.employees.filter(employee => employee.role === this.state.search);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  }

  reset = () => {
    this.setState({ employees });
  };


  clickedSort = (sortBy) => {
    console.log(sortBy)
    const newEmp = this.state.employees

    newEmp.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1)
    this.setState({ employees: newEmp })
  }

  // Map over this.state.employees and render a Table component for each employee object
  render() {
    return (
      <div>
        <Header />
        <Search 
        handleInputChange={this.handleInputChange} 
        formSubmit={this.formSubmit}/>
        <table className="table container">
          <TableHead clickedSort={this.clickedSort}/>
          {this.state.employees.map(employee => (
            <TableBody
              id={employee.id}
              // not sure what this key does
              key={employee.id}
              name={employee.name}
              role={employee.role}
              phone={employee.phone}
              email={employee.email}
              dob={employee.dob}
            />
            ))}
        </table>
      </div>
    );
  }
}

export default App;

