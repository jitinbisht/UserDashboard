import React from "react";
import PropTypes from "prop-types";
import "./ListItem.css";

const propTypes = {};

const defaultProps = {};

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fnEdit = () => {
    console.log("dsfsdfsd");
    document.getElementById("name").readOnly = false;
  };

  render() {
    const { name, email, contact, address, hobbies, id, role } = this.props;
    return (
      <React.Fragment>
        <div className="itemcontainer" key={id}>
          <div className="name">
            {this.props.editable ? (
              <input
                type="text"
                name="name"
                id="name"
                placeholder={name}
                onChange={this.fnEdit}
                onClick={this.fnEdit}
              />
            ) : (
              <span>{name}</span>
            )}
          </div>
          <div className="name">
            {this.props.editable ? (
              <input type="text" name="address" id="" />
            ) : (
              <span>{email}</span>
            )}
          </div>
          <div className="name">
            {this.props.editable ? (
              <input type="text" name="address" id="" />
            ) : (
              <span>{contact}</span>
            )}
          </div>
          <div className="name">
            {this.props.editable ? (
              <input type="text" name="address" id="" />
            ) : (
              <span>{address}</span>
            )}
          </div>
          <div className="name">
            {this.props.editable ? (
              <input type="text" name="address" id="" />
            ) : (
              <span>{hobbies}</span>
            )}
          </div>
          <div className="editable">
            <button onClick={this.props.editUser.bind(this, id)}>Edit</button>
          </div>
          {role == "admin" && (
            <div className="delete">
              <button>Delete</button>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;
