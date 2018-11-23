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
    if (
      userObj &&
      userObj.name &&
      userObj.email &&
      userObj.contact &&
      userObj.address &&
      userObj.hobbies
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
    const username = getCookie("username");
    const getUserObj = JSON.parse(getCookie("userobj"));
    this.setState(
      {
        currentUser: getUserObj
      },
      () => {
        console.log("cookie", this.state);
      }
    );
    if (!username) {
      this.props.history.push({
        pathname: "/"
      });
    }
  }
  render() {
    const username = getCookie("username");
    const renderListItem = this.fnRenderListItem();
    const { pathname, loggedInUser } = this.props.location;
    console.log("log-dashboard", this.props);

    return (
      <React.Fragment>
        <HeaderItems pathname={pathname} />
        <h1>Hello {this.state.currentUser.name}</h1>
        <div className="list_group">{renderListItem}</div>
      </React.Fragment>
    );
  }
}
