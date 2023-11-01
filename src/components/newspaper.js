import React from "react";
import { useParams } from "react-router-dom";

const Newspaper = () => {
  let { name } = useParams();

  const newspaperUrls = {
    "20minutos": "https://www.20minutos.es/",
    "europapress": "https://www.europapress.es/",
    "deia": "https://www.deia.eus/",
    "elpais": "https://elpais.com/",
    "cadenaser": "https://cadenaser.com/",
    "elmundo": "https://www.elmundo.es/",
    "lavanguardia": "https://www.lavanguardia.com/"
  };

  let url = newspaperUrls[name];

  if (!url) {
    return <div>URL no válida</div>;
  }

  return (
    <div>
      <iframe
        src={url}
        title="Noticias"
        width="100%"
        height="600px"
      />
    </div>
  );
};

export default Newspaper;

