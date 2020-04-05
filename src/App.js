import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Sort from "./components/Sort";
import employees from "./employees.json";

class App extends Component {

  state = {
    search: "",
    employees,
    aToZ: true
  };

  handleInputChange = event => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  sortName = () => {
    let currentEmployees = this.state.employees
    if (this.state.aToZ === true) {
      currentEmployees.sort(function(a,b) {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        return 0;
      })
      this.setState({ employees: currentEmployees ,  aToZ: false });
    }
    else {
      currentEmployees.sort(function(a,b) {
        if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        return 0;
      })
      this.setState({ employees: currentEmployees ,  aToZ: true });
    }
  }

  sortOccupation = () => {
    let currentEmployees = this.state.employees
    if (this.state.aToZ === true) {
      currentEmployees.sort(function(a,b) {
        if(a.occupation.toLowerCase() < b.occupation.toLowerCase()) return -1;
        return 0;
      })
      this.setState({ employees: currentEmployees ,  aToZ: false });
    }
    else {
      currentEmployees.sort(function(a,b) {
        if(a.occupation.toLowerCase() > b.occupation.toLowerCase()) return -1;
        return 0;
      })
      this.setState({ employees: currentEmployees ,  aToZ: true });
    }
  }
  
  render() {
    const filteredEmployees = this.state.employees.filter((employee) => { 
      return employee.name.indexOf(this.state.search) !== -1;
    })

    return (
      <Wrapper>
        <Navbar />
        <hr />
        <Sort
          handleInputChange={this.handleInputChange}
          sortName={this.sortName}
          sortOccupation={this.sortOccupation}
          search={this.state.search}
        >
        </Sort>
        {filteredEmployees.map(employee => (
          <Card
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            contact={employee.contact}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;