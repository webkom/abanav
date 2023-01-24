import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function isMobile() {
  return (window.innerHeight > window.innerWidth) ? true : false;
}

function DesktopCard(props: {title: string, children: string}) {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/abakule.png" />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.children}</Card.Text>
            <Button variant="primary">Gå hit</Button>
          </Card.Body>
        </Card>
      );
}

function MobileCard(props: {title: string, children: string}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.children}</Card.Text>
        <Button variant="primary">Gå hit</Button>
      </Card.Body>
    </Card>
  );
}

function CardComponent(props: {title: string, children: string}) {
  return(
    isMobile() ? ( <MobileCard title={props.title} children={props.children}/> ) : ( <DesktopCard title={props.title} children={props.children}/> )
  );
}

export default CardComponent;
