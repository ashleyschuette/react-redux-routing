import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import Form from './components/Form/Form';
import Employee from './components/Employee/Employee';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: []
    }

    this.addEmployee = this.addEmployee.bind(this);
  }

  addEmployee(name, hireDate, title) {
    // let newEmployee = {
    //    name: name,
    //    hireDate: hireDate,
    //    title: title  
    // }
    // Code above and below do the same thing.
    let newEmployee = { name, hireDate, title }
    this.setState({
      employees: [ ...this.state.employees, newEmployee ]
    })
  }

  render() {

    const employees = this.state.employees.map( (employee, index ) => {
      return <Employee employeeInfo={ employee } />
    })

    return (
      <div className="App">
        <Logo />
        <Form addEmployee={ this.addEmployee }/>
        { employees }
      </div>
    );
  }
}

export default App;
