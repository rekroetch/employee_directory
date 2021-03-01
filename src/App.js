// import './App.css';
import Header from './components/Header'
import Table from './components/Table'
import employees from "./employees.json";

function App() {
  return (
    <div>
      <Header />
      <Table 
        name={employees[0].name}
        role={employees[0].role}
        salary={employees[0].salary}
        id={employees[0].id}
      />
    </div>
  );
}

export default App;

