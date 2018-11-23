import React from "react";
import PropTypes from "prop-types";
import "./createuser.css";
import HeaderItems from "../Components/HeaderItems/HeaderItems";

const propTypes = {};

const defaultProps = {};

export default class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fnEdit = event => {
    this.setState({
      newUserObj: {
        ...this.state.newUserObj,
        [event.target.name]: event.target.value
      }
    });
  };

  createNewUser = id => {
    this.props.history.push({
      pathname: "/dashboard",
      newUserObj: this.state.newUserObj
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <HeaderItems pathname="/createUser" />
          <h1>Add new user</h1>
          <div className="container">
            <div className="name">
              <span>Name</span>
              <input name="name" type="text" onChange={this.fnEdit} />
            </div>
            <div className="email">
              <span>Email</span>
              <input name="email" type="text" onChange={this.fnEdit} />
            </div>
            <div className="contact">
              <span>Contact</span>
              <input name="contact" type="text" onChange={this.fnEdit} />
            </div>
            <div className="address">
              <span>Address</span>
              <input name="address" type="text" onChange={this.fnEdit} />
            </div>
            <div className="hobbies">
              <span>Hobbies</span>
              <input name="hobbies" type="text" onChange={this.fnEdit} />
            </div>
            <div className="submit">
              <button className="btnSubmit" onClick={this.createNewUser}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

CreateUser.propTypes = propTypes;
CreateUser.defaultProps = defaultProps;
