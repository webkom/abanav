import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function isMobile() {
  return window.innerHeight > window.innerWidth;
}

function CardComponent(props: {
  title: string;
  children: string;
  url: string;
  image: string;
}) {
  return (
    <Card className={isMobile() ? "mobileCard" : "desktopCard"}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{isMobile() || props.title}</Card.Title>
        {isMobile() || <Card.Text>{props.children}</Card.Text>}
        <Button href={props.url} variant="primary">
          {isMobile() ? props.title : "Ta meg hit"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
