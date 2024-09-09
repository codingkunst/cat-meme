import React from "react";

const Item = (props) => {
  return (
    <li>
      <img src={props.img} style={{ width: "150px" }} />
    </li>
  );
};

export default Item;
