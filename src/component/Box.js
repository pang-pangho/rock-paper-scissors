import React from "react";

const Box = ({ title, item, result }) => {
  return (
    <div className={`box ${result}`}>
      <h1 className="title">{title}</h1>
      <img className="item-img" src={item && item.img} alt="" />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
