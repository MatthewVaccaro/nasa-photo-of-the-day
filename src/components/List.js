import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Cards.js";

function List() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=5LdRxUqv6UJLNSdGnBrDgEbEhjl06YUJkkWBdZ4B"
      )
      .then(response => {
        setData(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className="master">
      <h1>Images from NASA</h1>
      <Card object={data} />
    </div>
  );
}

export default List;
