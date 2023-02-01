import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
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
      {isMobile() ?  null : <Card.Img variant="top" src={props.image} />}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.children}</Card.Text>
        <Button href={props.url} variant="primary">
          Ta meg hit
        </Button>
      </Card.Body>
    </Card>
  );
}


export default CardComponent;
