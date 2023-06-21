function Card(props: {
  title: string;
  url: string;
  image: string;
}) {
  return (
    <a href={props.url} className="card">
      <img alt={props.title + " icon"} src={props.image} />
      <p className="title">{props.title}</p>
    </a>
  );
}

export default Card;
