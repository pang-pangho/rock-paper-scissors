import React, { Component } from "react";

export default class BoxClass extends Component {
  render() {
    const { title, item, result } = this.props;
    return (
      <div className={`box ${result}`}>
        <h1 className="title">{title}</h1>
        <img className="item-img" src={item && item.img} alt="" />
        <h2>{result}</h2>
      </div>
    );
  }
}
