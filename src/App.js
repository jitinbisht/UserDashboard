import React, { Component } from "react";
import "./App.css";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import CreateUser from "./CreateUser/CreateUser";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/createUser" component={CreateUser} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
