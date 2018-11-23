import React from "react";
import ListItem from "../Components/ListItem/ListItem";
import userList from "../userlist";
import HeaderItems from "../Components/HeaderItems/HeaderItems";
import "./Dashboard.css";
import { getCookie } from "../utils";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userList, currentUser: {} };
    this.fnDeleteUser = this.fnDeleteUser.bind(this);
  }

  /**
   * saveUpdatedUser
   */
  saveUpdatedUser = (tempArray, index, userObj) => {
    // const { name, email, contact, address, hobbies } = userObj;
    const isEmailValid = /[\S+@\S+\.\S+]{6,100}/.test(userObj.email);
    const isMobileValid = /^[a-zA-Z0-9/+]{10,13}$/.test(userObj.contact);
    const isValidName = /^[a-zA-Z0-9]{2,100}$/.test(userObj.name);
    const isValidAddress = /^[a-zA-Z0-9]{50,255}$/.test(userObj.address);
    const isValidHobbies = /^[a-zA-Z0-9]{25,500}$/.test(userObj.address);

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

    // validate name

    if (!isValidName) {
      alert(
        "Please enter a valid user name. Text Min Length: 2, Text Max Length: 100"
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
    if (
      userObj &&
      userObj.name &&
      userObj.email &&
      userObj.contact &&
      userObj.address
    ) {
      tempArray[index] = {
        ...userObj,
        editable: !tempArray[index].editable
      };
      this.setState({ userList: tempArray });
      console.log("save is clicked");
    } else {
      alert("Please fill all values");
    }
  };

  /**
   * editUpdatedUser
   */
  editUpdatedUser = (tempArray, index, userObj) => {
    tempArray[index] = {
      ...tempArray[index],
      editable: !tempArray[index].editable
    };
    this.setState({ userList: tempArray });
  };

  /**
   *
   * @param {*} newUserObj
   */
  fnAddNewUser(newUserObj) {
    this.setState({
      userList: [...this.state.userList, newUserObj]
    });
  }

  /**
   *
   */
  fnEditUser = (userId, userObj) => {
    const index = this.state.userList.map(item => item.id).indexOf(userId);

    let tempArray = this.state.userList.slice(); //creates the clone of the state

    if (this.state.userList[index].editable) {
      //save is clicked
      this.saveUpdatedUser(tempArray, index, userObj);
    } else {
      //edit is clicked
      this.editUpdatedUser(tempArray, index, userObj);
    }
  };

  /**
   *
   */
  fnDeleteUser = userId => {
    const index = this.state.userList.map(item => item.id).indexOf(userId);
    const tempUserList = [...this.state.userList];
    const newState = [tempUserList.splice(index, 1)];
    this.setState({ userList: tempUserList });
  };

  fnRenderListItem = () => {
    // const { loggedInUser } = this.props.location;
    return this.state.userList.map(user => {
      const { name, email, contact, address, hobbies, id, role } = user;
      return (
        <ListItem
          key={"adsaa" + id}
          id={id}
          name={name}
          editable={user.editable}
          email={email}
          address={address}
          hobbies={hobbies}
          contact={contact}
          role={this.state.currentUser.role}
          editUser={this.fnEditUser}
          deleteUser={this.fnDeleteUser}
        />
      );
    });
  };

  componentDidMount() {
    const { pathname, newUserObj } = this.props.location;
    if (newUserObj) {
      this.fnAddNewUser(newUserObj);
    }
    const username = getCookie("username");
    const getUserObj = getCookie("userobj")
      ? JSON.parse(getCookie("userobj"))
      : "";
    this.setState({
      currentUser: getUserObj
    });
    if (!username) {
      this.props.history.push({
        pathname: "/"
      });
    }
  }
  render() {
    // const username = getCookie("username");
    const renderListItem = this.fnRenderListItem();
    const { pathname, newUserObj } = this.props.location;
    console.log("log-dashboard", this.props);

    return (
      <React.Fragment>
        <HeaderItems pathname="/dashboard" />
        <h1>Welcome {this.state.currentUser.name}</h1>
        <div className="list_group">{renderListItem}</div>
      </React.Fragment>
    );
  }
}
