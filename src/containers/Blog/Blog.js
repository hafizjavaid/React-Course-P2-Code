import React, { Component } from "react";

import "./Blog.css";

import {Route, NavLink} from "react-router-dom"

import Posts from "./Posts/Posts"

// import Post from './FullPost/FullPost'

import NewPost from './NewPost/NewPost'

class Blog extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                 exact
                  to="/"
                  >Posts</NavLink>
              </li>
              <li>
                <NavLink to="/new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>

          <Route path="/"
           component={Posts} />
          <Route path="/new-post"
           component={NewPost} />
             {/* <Route path="/posts/:id" exact 
             component={Post} /> */}
         
      </div>
    );
  }
}

export default Blog;
