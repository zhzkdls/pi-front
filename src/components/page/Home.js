import React, {useState, useEffect} from "react";
import Filter from "../layout/Filter";
import MapContainer from "../layout/MapContainer ";

export const Home = () => {
  const [Place, setPlace] = useState("");
  const [facit, setFacit] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/tbfacit/getAll")
      .then((res) => res.json())
      .then((res) => {

        setFacit(res);
      });
  }, []);

  return (
    <>
      <Filter />
        <MapContainer searchPlace={Place}/>
    </>
  );
};
