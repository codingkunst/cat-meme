import React from "react";

const MainCard = (props) => {
  const heartIcon = props.alreadyFavorite ? "💖" : "🤍";

  return (
    <div>
      <div className="main-card">
        <img className="image" src={props.img} alt="Loading..." width="450" height="450" />
        <button style={{position:"relative", left:"-45px", bottom:"15px"}} onClick={props.onHeartClick}>{heartIcon}</button>
        <div className="overlay-text">여기에 텍스트를 입력하세요</div>
      </div>
    </div>
  );
};

export default MainCard;
