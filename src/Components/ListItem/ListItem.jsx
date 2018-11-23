import React from "react";
import "./ListItem.css";

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fnEdit = event => {
    debugger;
    this.setState(
      {
        userObj: {
          ...this.state.userObj,
          [event.target.name]: event.target.value
        }
      },
      () => {
        console.log("this.state", this.state);
      }
    );

    //debugger;
    // document.getElementById("name").readOnly = false;
  };

  updateUserRow = id => {
    this.props.editUser(id, this.state.userObj);
  };

  deleteUser = (id, userObj) => {
    this.props.deleteUser(id);
    // console.log(id, userObj, "====id====");
  };

  render() {
    const { name, email, contact, address, hobbies, id, role } = this.props;
    const userObj = {
      name,
      email,
      contact,
      address,
      hobbies,
      id,
      role
    };
    return (
      <React.Fragment>
        <div className="itemcontainer">
          <div className="name">
            {this.props.editable ? (
              <input
                type="text"
                name="name"
                id="name"
                placeholder={name}
                onChange={this.fnEdit}
              />
            ) : (
              <span>{name}</span>
            )}
          </div>
          <div className="email">
            {this.props.editable ? (
              <input
                type="text"
                name="email"
                id=""
                onChange={this.fnEdit}
                placeholder={email}
              />
            ) : (
              <span>{email}</span>
            )}
          </div>
          <div className="contact">
            {this.props.editable ? (
              <input
                type="text"
                name="contact"
                id=""
                onChange={this.fnEdit}
                placeholder={contact}
              />
            ) : (
              <span>{contact}</span>
            )}
          </div>
          <div className="address">
            {this.props.editable ? (
              <input
                type="text"
                name="address"
                id=""
                onChange={this.fnEdit}
                placeholder={address}
              />
            ) : (
              <span>{address}</span>
            )}
          </div>
          <div className="hobbies">
            {this.props.editable ? (
              <input
                type="text"
                name="hobbies"
                id=""
                onChange={this.fnEdit}
                placeholder={hobbies}
              />
            ) : (
              <span>{hobbies}</span>
            )}
          </div>
          <div className="editable">
            <button onClick={this.updateUserRow.bind(this, id, userObj)}>
              {this.props.editable ? <span>Save</span> : <span>Edit</span>}
            </button>
          </div>
          {role === "admin" && (
            <div className="delete">
              <button onClick={this.deleteUser.bind(this, id, userObj)}>
                Delete
              </button>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
