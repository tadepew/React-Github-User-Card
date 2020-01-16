import React from "react";

const UserCard = props => {
  return (
    <div className="user-card">
      <img src={props.img} width="20%" alt={props.login}></img>
      <h2>{props.name}</h2>
      <span>GitHub handle: </span>
      <a href={props.url}>{props.login}</a>
      <p>Bio: {props.bio}</p>
      <p>Location: {props.location}</p>
    </div>
  );
};

export default UserCard;
