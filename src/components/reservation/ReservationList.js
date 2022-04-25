import { useEffect, useState } from "react";
import ReservationItems from "./ReservationItems";
import { RESERVATIONBACKEND } from "../../_actions/types";

const ReservationList = () => {
    const [reservations, setReservations] = useState([]);
  
    useEffect(() => {
      fetch(`${RESERVATIONBACKEND}/reservation/getAll`)
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
  
  export default ReservationList;

