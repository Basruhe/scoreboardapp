import React from "react";
import Component from "react";
import "../App.css";

export default class Card extends React.Component {
  render() {
    return (
      <div className="section section-what-usp">
        <div className="component-section-header">
          <div className="title-badge">
            <div className="title-badge-title">{this.props.badge}</div>
          </div>

          <h2>
            <div className="component-title ">{this.props.header}</div>
          </h2>

          <div className="description">{this.props.description}</div>
        </div>
      </div>
    );
  }
}
