import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import FacitDetailDatePicker from "../holyday/FacitDetailDatePicker";
import HolydayPicker from "../holyday/HolydayPicker";
import UseIsMount from "../UseIsMount";


function FacitDetail() {
    const fcSeq = useParams().fcSeq;
    const isMount = UseIsMount;

    const [facit, setFacit] = useState({
        faciNm: "",
        faciRoadAddr1: "",
        faciHomepage: '',
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/tbfacit/get/${fcSeq}`)
        .then((res) => {
            if (isMount) {
                setFacit(res.data);
            }    
        });
    }, [fcSeq, isMount]);

    return ( 
    <div style={{textAlign: "center"}}>
      <h1>{facit.faciNm}</h1>
      <hr />
      <h3>{facit.faciNm}</h3>
      <h3>{facit.faciRoadAddr1}</h3>
      <h3>{facit.faciHomepage}</h3>
      <h3>{facit.fmngUserTel}</h3>
      <h3>{facit.fcobNm}</h3>
      <HolydayPicker />
      <FacitDetailDatePicker />
      <Link to={"/reservation/" + fcSeq} className="btn btn-primary" variant="primary">예약하기</Link>
      <Link to={"/reservationList/" + fcSeq} className="btn btn-primary" variant="primary">예약현황</Link>
    </div>
     );
}

export default FacitDetail;