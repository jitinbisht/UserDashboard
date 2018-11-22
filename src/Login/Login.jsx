import React from "react";
import "./login.css";
import userList from "../userlist";
import HeaderItems from "../Components/HeaderItems/HeaderItems";

import { setCookie } from "../utils";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  validateLogin = () => {
    const userName = document.getElementById("username").value;
    //const password = document.getElementById("password");

    if (userName === "jb") {
      setCookie("username", userName);
      this.props.history.push({
        pathname: "/dashboard",
        loggedInUser: userList[0] // this is hardcoded value
      });
    } else {
      alert("please verify userid and password");
    }
  };

  render() {
    const { pathname } = this.props.location;
    console.log("log1", this.props.location);
    return (
      <React.Fragment>
        <HeaderItems pathname={pathname} />
        <h1>Login</h1>

        <br />
        <div className="loginContainer">
          <div className="username">
            <span>User Name</span>
            <input id="username" type="text" />
          </div>
          <div className="password">
            <span>Password</span>
            <input id="password" type="password" />
          </div>
          <div className="submit">
            <button onClick={this.validateLogin}>Submit</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
