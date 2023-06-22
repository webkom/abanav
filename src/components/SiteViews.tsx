import CardComponent from "../components/CardComponent";
import sites from "../sites.json";

const Sites = sites.map((site) => {
  return (
    <Card
      title={site.name}
      url={site.url}
      image={site.image === "" ? "/abakule.png" : site.image}
    >
      {site.description}
    </Card>
  );
});

function SiteViews() {
  return <div className="card-container">{Sites}</div>;
}

export default SiteViews;
