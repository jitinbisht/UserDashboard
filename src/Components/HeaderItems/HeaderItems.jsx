import React from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// const propTypes = {};

// const defaultProps = {};

export default class HeaderItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboard: false
    };
  }

  renderItems() {
    const { pathname } = this.props;
    switch (pathname) {
      case "/dashboard":
        this.setState({ dashboard: true });
        break;

      default:
        break;
    }
  }

  componentDidMount() {
    this.renderItems();
  }

  render() {
    const { dashboard } = this.state;
    const url =
      "http://3.bp.blogspot.com/-pr-O2F-vf6Y/WVIXqjxDwRI/AAAAAAAAFbU/BUa3mYHJxi8sYSZoBI5Uh3TMYfsYYBOFgCHMYBhgL/s1600/shell-logo-large-hd-sk-png-1163%25C3%25971080-logo-pinterest.jpg";
    return (
      <React.Fragment>
        <div className="header">
          <div className="title">
            <Link to="/">
              <img height="40px" src={url} alt="" />
            </Link>
          </div>
          {dashboard && (
            <div className="dashboard">
              <Link to="/dashboard/">Dashboard</Link>
            </div>
          )}
          <div className="create">
            <Link to="/create/">create</Link>
          </div>
          <div className="Logout">
            <Link to="/logout/">logout</Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// HeaderItems.propTypes = propTypes;
// HeaderItems.defaultProps = defaultProps;
