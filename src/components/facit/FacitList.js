import { useEffect, useState } from "react";
import FacitItem from "./FacitItem";

function FacitList() {
    
  const [facits, setFacits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/tbfacit/getAll")
      .then((res) => res.json())
      .then((res) => {
        console.log(1, res);
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