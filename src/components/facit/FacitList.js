import { useEffect, useState } from "react";
import MapContainer from "../layout/MapContainer ";
import FacitItem from "./FacitItem";

function FacitList() {
    
  const [facits, setFacits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/tbfacit/getAll")
      .then((res) => res.json())
      .then((res) => {
        setFacits(res);
      });
  }, []);

  return ( 
      <div>
          {facits.map((facits) => (
        <FacitItem key={facits.fcSeq} facit={facits} />
      ))}
      </div>
    );
}

export default FacitList;