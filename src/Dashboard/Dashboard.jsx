import React from "react";
import PropTypes from "prop-types";
import ListItem from "../Components/ListItem/ListItem";
import userList from "../userlist";
import HeaderItems from "../Components/HeaderItems/HeaderItems";

const propTypes = {};

const defaultProps = {};

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userList };
  }

  fnEditUser = user => {
    console.log("user", user);
    const index = this.state.userList.map(item => item.id).indexOf(user);
    console.log(index);

    let tempArray = this.state.userList.slice(); //creates the clone of the state
    tempArray[index] = { ...tempArray[index], editable: true };
    this.setState({ userList: tempArray });
  };

  fnRenderListItem = () => {
    return this.state.userList.map(user => {
      const { name, email, contact, address, hobbies, id, role } = user;
      return (
        <ListItem
          id={id}
          name={name}
          editable={user.editable}
          email={email}
          address={address}
          hobbies={hobbies}
          contact={contact}
          role={role}
          editUser={this.fnEditUser}
        />
      );
    });
  };

  render() {
    const renderListItem = this.fnRenderListItem();
    const { pathname } = this.props.location;
    console.log("log", this.props.location);
    return (
      <React.Fragment>
        <HeaderItems pathname={pathname} />

        {renderListItem}
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;
