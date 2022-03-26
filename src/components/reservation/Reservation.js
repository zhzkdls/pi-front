import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import moment from "moment";
import { useNavigate} from "react-router-dom";
import "../../App.css";
import ReservationList from "./ReservationList";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {ko} from "date-fns/esm/locale"
import addDays from "date-fns/addDays";


const Reservation = (props) => {
  
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const nowTime = moment().format("YYYY-MM-DD hh:mm:ss");
  const [message, setMessage] = useState("");

  const [reservation, setReservation] = useState({
    rsvtSeq:0,
    fcSeq: 0,
    userId: "",
    userTel: "",
    rsvtYmd: "",
    rsvtHr: "",
    rsvtPdt: 0,
    rsvtRtrchDt: "",
    rsvtAprvDt: nowTime,
    rsvtRcptDt: nowTime,
    rsvtMdfcnDt: nowTime,
    operHr: "",
    stat: 1,
  });

  const addReservation = (e) => {
    e.preventDefault();

    if (reservation.rsvtHr.length === 0) {
      alert("시간을 선택해주세요.");
      return navigate("/reservation");
    }

    reservation.rsvtYmd = moment(startDate).format("YYYYMMDD");

    fetch("http://localhost:8081/reservation/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(reservation),
    })
    .then(response => response.text())
    .then(message => {
      setMessage(message);
      if(message === "이미 예약된 시간입니다."){
          alert("이미 예약된 시간입니다.");
      }
  });
    console.log(reservation);
  };

  const changeValue = (e) => {
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <Form onSubmit={addReservation}>
        <Form.Group style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center",}}>
          <div>
            <DatePicker name="rsvtYmd" selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} maxDate={addDays(new Date(), 30)} locale={ko} editable={false} disabledKeyboardNavigation inline
              dateFormat="yyyy-MM-dd" />
          </div>
          <div>
            <Form.Label>예약시간 선택</Form.Label>
            <br></br>
            <input type="radio" name="rsvtHr" value="09:00~10:00" onChange={changeValue}/>
            09:00~10:00
            <br></br>
            <input type="radio" name="rsvtHr" value="10:00~11:00" onChange={changeValue}/>
            10:00~11:00
            <br></br>
            <input type="radio" name="rsvtHr" value="11:00~12:00" onChange={changeValue}/>
            11:00~12:00
            <br></br>
            <input type="radio" name="rsvtHr" value="12:00~13:00" onChange={changeValue}/>
            12:00~13:00
            <br></br>
            <input type="radio" name="rsvtHr" value="13:00~14:00" onChange={changeValue}/>
            13:00~14:00
            <br></br>
            <input type="radio" name="rsvtHr" value="14:00~15:00" onChange={changeValue}/>
            14:00~15:00
            <br></br>
            <input type="radio" name="rsvtHr" value="15:00~16:00" onChange={changeValue}/>
            15:00~16:00
            <br></br>
            <input type="radio" name="rsvtHr" value="16:00~17:00" onChange={changeValue}/>
            16:00~17:00
            <br></br>
            <input type="radio" name="rsvtHr" value="17:00~18:00" onChange={changeValue}/>
            17:00~18:00
            <br></br>
            <Button variant="primary" type="submit">
              예약
            </Button>
          </div>
        </Form.Group>

        <br></br>
      </Form>
      <div>
        <ReservationList />
      </div>
    </div>
  );
}

export default Reservation;
