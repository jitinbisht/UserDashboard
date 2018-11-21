import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className="header">
              <div className="title">
                <Link to="/">Title</Link>
              </div>
              <div className="dashboard">
                <Link to="/dashboard/">Dashboard</Link>
              </div>
              <div className="create">create</div>
            </div>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
