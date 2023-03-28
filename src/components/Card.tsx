import React from "react";

function Card(props: {
  title: string;
  description: string;
  url: string;
  image: string;
}) {
  return (
    <a href={props.url} className="card">
      <img src={props.image} />
      <div className="textContainer">
        <p className="title">{props.title}</p>
        <p className="description">{props.description}</p>
      </div>
    </a>
  );
}

export default Card;
