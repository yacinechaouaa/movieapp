import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ el }) => {
  console.log(el.rate);
  const [rating, setRating] = useState(el.rate);

  const handlClick = (e) => {
    Number(e.target.value) < 11
      ? setRating(e.target.value)
      : setRating(el.rate);
  };

  return (
    <div className="each">
      <img src={el.url} className="image" />
      <div>
        <span style={{ marginTop: "50px" }}> {el.n} </span>
        <span className="moviename" style={{ marginTop: "50px" }}>
          <Link to={`film/${el.id}`}>
            {el.name} {el.id}
          </Link>
        </span>
        <div>
          <span className="rate"> rate : {rating}</span>
          <input type="text" onChange={handlClick} className="rateinput" />
        </div>
      </div>
    </div>
  );
};

export default Card;
