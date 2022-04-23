import { useEffect, useState } from "react";
import ReservationItems from "./ReservationItems";
import {useParams} from "react-router-dom";
import { RESERVATIONBACKEND } from "../../_actions/types";


const ReservationListByFcSeq = () => {
    const [reservations, setReservations] = useState([]);
    const fcSeq = useParams().fcSeq;
  
    useEffect(() => {
      fetch(`${RESERVATIONBACKEND}:8081/reservation/getAll/${fcSeq}`)
        .then((res) => res.json())
        .then((res) => {
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

