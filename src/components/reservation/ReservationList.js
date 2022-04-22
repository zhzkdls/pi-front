import { useEffect, useState } from "react";
import ReservationItems from "./ReservationItems";


const ReservationList = (props) => {
    const [reservations, setReservations] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:8081/reservation/getAll")
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
  
  export default ReservationList;

