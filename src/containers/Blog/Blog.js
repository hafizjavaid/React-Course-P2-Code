import React, { Component } from "react";

import "./Blog.css";

import { Route, NavLink } from "react-router-dom";

import Posts from "./Posts/Posts";

// import Post from './FullPost/FullPost'

import NewPost from "./NewPost/NewPost";

class Blog extends Component {
  state = {
    auth: false,
  };
  render() {
    return (
      <div>
        {/* Header */}
        <header>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/">
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        {/* <Switch> */}
          {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}

          <Route path="/new-post" component={NewPost} />
          <Route path="/" component={Posts} />
          {/* <Redirect to="/" /> */}

          {/* <Route path="/posts/:id" exact 
             component={Post} /> */}
        {/* </Switch> */}
      </div>
    );
  }
}

export default Blog;
