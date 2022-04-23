import { useEffect, useState } from "react";
import ReservationItems from "./ReservationItems";


const ReservationList = (props) => {
    const [reservations, setReservations] = useState([]);
  
    useEffect(() => {
      fetch("http://192.168.0.36:8081/reservation/getAll")
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

