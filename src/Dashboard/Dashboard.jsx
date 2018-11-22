import React from "react";
import ListItem from "../Components/ListItem/ListItem";
import userList from "../userlist";
import HeaderItems from "../Components/HeaderItems/HeaderItems";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userList };
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

  fnRenderListItem = () => {
    const { loggedInUser } = this.props.location;
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
          role={loggedInUser ? loggedInUser.role : false}
          editUser={this.fnEditUser}
        />
      );
    });
  };

  render() {
    const renderListItem = this.fnRenderListItem();
    const { pathname, loggedInUser } = this.props.location;
    console.log("log-dashboard", this.props);
    return (
      <React.Fragment>
        <HeaderItems pathname={pathname} />
        <h1>Hello {loggedInUser && loggedInUser.name}</h1>
        {renderListItem}
      </React.Fragment>
    );
  }
}
