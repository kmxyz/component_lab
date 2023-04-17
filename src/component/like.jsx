import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

const Like = (props) => {
  let classes = "fa fa-heart";
  if (props.like !== true) {
    classes += "-o";
  }
  return (
    <i
      style={{ cursor: "pointer" }}
      className={classes}
      onClick={props.onClicked}
    ></i>
  );
};

export default Like;
