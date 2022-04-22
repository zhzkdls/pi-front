import { useEffect, useState } from "react";
import ReservationItems from "./ReservationItems";
import {useParams} from "react-router-dom";

const ReservationListByFcSeq = (props) => {
    const [reservations, setReservations] = useState([]);
    const fcSeq = useParams().fcSeq;
  
    useEffect(() => {
      fetch(`http://localhost:8081/reservation/getAll/${fcSeq}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(1, res);
          setReservations(res);
        });
    }, []);
  
    return (
      <div>
        {reservations.map((reservation) => (
          <ReservationItems key={reservation.rsvtSeq} reservation={reservation}/>
        ))}
      </div>
    );
  };
  
  export default ReservationListByFcSeq;

