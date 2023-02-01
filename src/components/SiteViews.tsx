import CardComponent from "../components/CardComponent";
import sites from "../sites.json";

const Sites = sites.map((site) => {
  return (
    <CardComponent title={site.name} url={site.url} image={site.image}>
      {site.description}
    </CardComponent>
  );
});

function SiteViews() {
  return <div className="card-container">{Sites}</div>;
}

export default SiteViews;
