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
        {" "}
        {/* Header */}{" "}
        <header>
          <nav>
            <ul>
              <li>
                {/* This can be link and we can also pass object to="" */}
                <NavLink exact to="/">
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post"> New Post </NavLink>{" "}
              </li>
            </ul>
          </nav>
        </header>
        {/* <Switch> */}
        {/* Routing Guard */}
        {this.state.auth ? (
          <Route path="/new-post" component={NewPost} />
        ) : null}
        {/* Routing Guard */}
        <Route path="/new-post" component={NewPost} />

        {/* If we specify the route without assigning the path attribut
        then the component we mentioned or render here will be displayed on the scrreem
        ne important thing is that it is not working with the Redirect. */}
        <Route  component={Posts} />
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
