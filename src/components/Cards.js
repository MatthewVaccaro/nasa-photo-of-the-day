import React from "react";
import styled from "styled-components";
function Card(props) {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: dodgerblue;
  `;

  const Card = styled.div`
    background: white;
    border-radius: 5px;
    box-shadow: 0px 10px 5px rgba(51, 51, 51, 0.09);
  `;

  return (
    <Card className="card_container">
      <img src={props.object.url}></img>
      <div className="content">
        <Title>{props.object.title}</Title>
        <p>{props.object.date}</p>
      </div>
    </Card>
  );
}

export default Card;
