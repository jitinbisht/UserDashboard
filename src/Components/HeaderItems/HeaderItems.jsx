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
    return (
      <React.Fragment>
        <div className="header">
          <div className="title">
            <Link to="/">Title</Link>
          </div>
          {dashboard && (
            <div className="dashboard">
              <Link to="/dashboard/">Dashboard</Link>
            </div>
          )}
          <div className="create">create</div>
        </div>
      </React.Fragment>
    );
  }
}

// HeaderItems.propTypes = propTypes;
// HeaderItems.defaultProps = defaultProps;
