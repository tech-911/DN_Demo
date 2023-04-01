import React, { useEffect, useState } from "react";
import "./simillarrp.scss";
import SimrpWidget from "../../simrpWidget/SimrpWidget";
import axios from "axios";

const Simillarrp = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://www.dawahbox.com/mongo/api/albumlisting_page_api.php?page=3&lim=10&langid=7"
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="simrp_wrapper">
      {data.map(({ img, categories, title }, idx) => {
        return (
          <SimrpWidget
            key={idx}
            title={title}
            lecturer={categories}
            img={img}
            rp={title}
          />
        );
      })}
    </div>
  );
};

export default Simillarrp;
