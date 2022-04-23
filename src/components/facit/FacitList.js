import { useEffect, useState } from "react";
import FacitItem from "./FacitItem";
import { RESERVATIONBACKEND } from "../../_actions/types";

function FacitList() {
    
  const [facits, setFacits] = useState([]);

  useEffect(() => {
    fetch(`${RESERVATIONBACKEND}:8081/tbfacit/getAll`)
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