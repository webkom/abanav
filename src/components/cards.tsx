import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";


function Card(props: {title: string, text: string}) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}


export default Card;
