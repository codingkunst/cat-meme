import React from "react";
import Item from "./Item";

const Favorites = (props) => {
  if (props.favorites.length === 0) {
    return <p>🧡를 눌러주세요</p>;
  }

  return (
    <ul className="favorites">
      {props.favorites.map((item) => {
        return <Item img={item} key={item} />;
      })}
    </ul>
  );
};

export default Favorites;
