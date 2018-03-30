import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderUserLinks() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">LOGOUT</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav
        className="text-center"
        style={{
          backgroundColor: "#f4f5fc",
          padding: "30px 0"
        }}
      >
        <div>
          <Link to={this.props.auth ? "/dashboard" : "/"}>
            <div style={{ fontSize: "64px" }}>
              A Beautiful Mess 101
            </div>
          </Link>
        </div>
        <div>
          <ul className="list-inline">
            <li>
              <a href="#about">ABOUT ME</a>
            </li>
            <li>.</li>
            <li>
              <a href="#work">SERVICES</a>
            </li>
            <li>.</li>
            <li>
              <Link to="/blog">SOME THOUGHTS</Link>
            </li>
            <li>.</li>
            <li>
              <a href="contact">REACH OUT</a>
            </li>
            <li>.</li>
            {this.renderUserLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
