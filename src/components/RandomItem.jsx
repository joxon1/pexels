import React from "react";

const RandomItem = (props) => {
  return (
    <div className="item">
      <a href={props.src.large}>
        <img src={props.src.large} alt={Image.url} />
      </a>
    </div>
  );
};

export default RandomItem;
