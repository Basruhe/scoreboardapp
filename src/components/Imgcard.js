import React from "react";
import Component from "react";
import "../App.css";

export default class Imgcard extends React.Component {
  render() {
    return (
      <div className="item team">
        <img className="image" src={this.props.image} />
        <div className="component-title title">{this.props.title}</div>
      </div>
    );
  }
}
