import React from "react";

import { withRouter } from "react-router-dom";

import "./Post.css";

const post = (props) => {
  console.log(props);
  return (
    <article className="Post" onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  );
};

// With "withRouter" we can access the routing related thing within the component which is not the
// the part of dirrectly route component and it exist within the route component as a child.
export default withRouter(post);
