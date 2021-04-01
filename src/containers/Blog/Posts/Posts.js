import React, { Component } from "react";

import axios from "axios";
import Post from "../../../components/Post/Post";

import "./Posts.css";
import { Route } from "react-router";
import FullPost from "../FullPost/FullPost";

// import {Link} from 'react-router-dom'

class Posts extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      const posts = res.data.slice(0, 4);
      const updatedPost = posts.map((post) => {
        return {
          ...post,
          author: "Max",
        };
      });
      this.setState({ posts: updatedPost });
    });
    console.log("Hello");
  }
  postSelected = (id) => {

    this.props.history.push({pathname: '/posts/' + id})
    // this.setState({ selectedId: id });
  };
  render() {
    const posts = this.state.posts.map((post) => {
      return (
        // <Link to={'/posts/' + post.id}   
        // key={post.id}>
         <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelected(post.id)}
        />
        // </Link>
        
      );
    });
    return (

        <div>
        <section className="Posts">{posts}</section>
         
         <Route path={this.props.match.url + 'posts/:id'} exact component={FullPost} />

        </div>

    );
    
  }
}

export default Posts;
