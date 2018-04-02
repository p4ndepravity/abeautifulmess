import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
// import Dashboard from "./Dashboard";
import Blog from "./blog/Blog";
// import Post from "./blog/Post";
// import PostNew from "./blog/PostNew";
const Dashboard = () => <h2>Dashboard</h2>;
const PostNew = () => <h2>PostNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/posts/new" component={PostNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
