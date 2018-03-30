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
          <NavItem eventKey={1} href="/auth/google">
            Login With Google
          </NavItem>
        );
      default:
        return (
          <NavItem eventKey={1} href="/api/logout">
            Logout
          </NavItem>
        );
    }
  }

  render() {
    return (
      <NavBar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={this.props.auth ? "/dashboard" : "/"}>
              A Beautiful Mess 101
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#about">
            About Me
          </NavItem>
          <NavItem eventKey={2} href="#work">
            Services
          </NavItem>
          <NavItem eventKey={3} href="/blog">
            Some Thoughts
          </NavItem>
          <NavItem eventKey={4} href="#contact">
            Reach Out
          </NavItem>
        </Nav>
        <Nav pullRight>{this.renderUserLinks()}</Nav>
      </NavBar>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
