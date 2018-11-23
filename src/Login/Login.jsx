import React from "react";
import "./login.css";
import userList from "../userlist";
import HeaderItems from "../Components/HeaderItems/HeaderItems";

import { setCookie, deleteAllCookies } from "../utils";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkUserExists = (userName, password) => {
    const usernameArray = userList.map(user => {
      return user.username;
    });
    const passwordArray = userList.map(user => {
      return user.password;
    });

    const index = usernameArray.indexOf(userName);

    if (index !== -1 && passwordArray[index] == password) {
      return {
        isLoggedIn: true,
        user: userList[index]
      };
    } else {
      return {
        isLoggedIn: false
      };
    }
  };

  validateLogin = () => {
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const isValidUser = this.checkUserExists(userName, password);

    //const password = document.getElementById("password");
    if (isValidUser.isLoggedIn) {
      setCookie("username", userName);
      setCookie("userobj", JSON.stringify(isValidUser.user));
      this.props.history.push({
        pathname: "/dashboard",
        loggedInUser: isValidUser.user // this is hardcoded value
      });
    } else {
      alert("please verify userid and password");
    }
  };

  componentDidMount() {
    deleteAllCookies();
  }

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
