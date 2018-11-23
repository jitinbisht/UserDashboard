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

  validateNewUser = userObj => {
    // const { name, email, contact, address, hobbies } = userObj;
    const isEmailValid = /[\S+@\S+\.\S+]{6,100}/.test(userObj.email);
    const isMobileValid = /^[a-zA-Z0-9/+]{10,13}$/.test(userObj.contact);
    const isValidName = /^[a-zA-Z0-9]{2,100}$/.test(userObj.name);
    const isValidAddress = /^[a-zA-Z0-9]{50,255}$/.test(userObj.address);
    const isValidHobbies = /^[a-zA-Z0-9]{25,500}$/.test(userObj.address);
    // validate name

    if (!isValidName) {
      alert(
        "Please enter a valid user name. Text Min Length: 2, Text Max Length: 100"
      );
      return false;
    }

    //validate Email Address
    if (!isEmailValid) {
      alert("Please enter a valid email. Min length-6 and MaxLength- 100");
      return false;
    }

    //validate mobile number
    if (!isMobileValid) {
      alert(
        "Please enter a valid Mobile Number. Text Min Length: 10, Text Max Length: 13 (+91 9999999999): Input should allow only plus and digits."
      );
      return false;
    }

    //validate Address

    if (!isValidAddress) {
      alert(
        "Please enter a valid user address. Mandatory, Text Min Length: 50, Text Max Length: 255"
      );
      return false;
    }

    //validate Hobbies and interests

    if (!isValidHobbies) {
      alert(
        "Please enter a valid user address. Text Min Length: 25, Text Max Length: 500"
      );
      return false;
    }

    if (isValidName && isEmailValid && isMobileValid && isValidAddress) {
      return true;
    } else {
      alert("Please fill mandatory fields. Name,email,contact,address");
    }
  };

  createNewUser = id => {
    const isValid = this.validateNewUser(this.state.newUserObj);
    if (!isValid) return false;

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
