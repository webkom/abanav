import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function isMobile() {
  return window.innerHeight > window.innerWidth ? true : false;
}

function DesktopCard(props: {
  title: string;
  children: string;
  url: string;
  image: string;
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.children}</Card.Text>
        <Button href={props.url} variant="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

function MobileCard(props: {
  title: string;
  children: string;
  url: string;
  image?: string;
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.children}</Card.Text>
        <Button href={props.url} variant="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

function CardComponent(props: {
  title: string;
  children: string;
  url: string;
  image: string;
}) {
  return isMobile() ? (
    <MobileCard title={props.title} children={props.children} url={props.url} />
  ) : (
    <DesktopCard
      title={props.title}
      children={props.children}
      url={props.url}
      image={props.image}
    />
  );
}

export default CardComponent;
