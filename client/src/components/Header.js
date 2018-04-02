import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

class Header extends Component {
  renderHeaderDot() {
    return <li>.</li>;
  }

  renderHeaderLink({ ref, content, isListItem, isAPICall, isHashLink }) {
    const style = { color: "#4d4959", textDecoration: "none" };
    const linkTag = isAPICall ? (
      <a href={ref} style={style}>
        {content}
      </a>
    ) : isHashLink ? (
      <HashLink smooth to={ref} style={style}>
        {content}
      </HashLink>
    ) : (
      <Link to={ref} style={style}>
        {content}
      </Link>
    );

    const result = isListItem ? <li key={ref}>{linkTag}</li> : linkTag;

    return result;
  }

  renderUserLinks() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return this.renderHeaderLink({
          ref: "/auth/google",
          content: "LOGIN WITH GOOGLE",
          isListItem: true,
          isAPICall: true
        });
      default:
        return [
          this.renderHeaderLink({
            ref: "/dashboard",
            content: "DASHBOARD",
            isListItem: true
          }),
          this.renderHeaderDot(),
          this.renderHeaderLink({
            ref: "/api/logout",
            content: "LOGOUT",
            isListItem: true,
            isAPICall: true
          })
        ];
    }
  }

  render() {
    return (
      <nav
        className="text-center"
        style={{ backgroundColor: "#f4f5fc", marginBottom: "42px" }}
      >
        <div style={{ padding: "30px 0" }}>
          {this.renderHeaderLink({
            ref: this.props.auth ? "/dashboard" : "/",
            content: (
              <img
                src={require("../images/main-logo.png")}
                alt="A Beautiful Mess 101"
              />
            ),
            isListItem: false
          })}
        </div>
        <div style={{ paddingBottom: "12px", letterSpacing: "2px" }}>
          <ul className="list-inline">
            {this.renderHeaderLink({
              ref: "/#about",
              content: "ABOUT ME",
              isListItem: true,
              isHashLink: true
            })}
            {this.renderHeaderDot()}
            {this.renderHeaderLink({
              ref: "/#services",
              content: "SERVICES",
              isListItem: true,
              isHashLink: true
            })}
            {this.renderHeaderDot()}
            {this.renderHeaderLink({
              ref: "/blog",
              content: "SOME THOUGHTS",
              isListItem: true
            })}
            {this.renderHeaderDot()}
            {this.renderHeaderLink({
              ref: "#contact",
              content: "REACH OUT",
              isListItem: true,
              isHashLink: true
            })}
            {this.renderHeaderDot()}
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
