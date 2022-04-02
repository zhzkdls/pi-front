import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import "../../App.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {ko} from "date-fns/esm/locale"
import addDays from "date-fns/addDays";




const Reservation = (props) => {

  const fcSeq = useParams().fcSeq;
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const nowTime = moment().format("YYYY-MM-DD hh:mm:ss");
  const [message, setMessage] = useState("");

  const [reservation, setReservation] = useState({
    fcSeq: 0,
    userId: "test1",
    userTel: "010-7777-8888",
    rsvtYmd: "",
    rsvtHr: "",
    rsvtPdt: 0,
    rsvtAprvDt: nowTime,
    rsvtRcptDt: nowTime,
    operHr: "",
    stat:2,
  });

  const addReservation = (e) => {
    e.preventDefault();
    if (reservation.rsvtHr.length === 0) {
      alert("시간을 선택해주세요.");
      navigate("/reservation/" + fcSeq);
    }else{
      reservation.fcSeq = fcSeq;
      reservation.rsvtYmd = moment(startDate).format("YYYY-MM-DD");
  
      fetch("http://localhost:8080/reservation/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(reservation),
      })
      .then(response => response.text())
      .then(message => {
        setMessage(message);
        if(message === "예약 완료!"){
          alert("예약 되었습니다.");
          navigate("/facit/" + fcSeq);
        }else if(message !== "예약 완료!"){
          alert("이미 예약된 시간입니다.");
        }
    });
      console.log(reservation);
    }
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
        <Form.Group>
          <div style={styles.BBk}>
            <label  style={styles.BBs}> 예약 날짜 선택</label>
            <br></br>
            <DatePicker name="rsvtYmd" selected={startDate} onChange={date => setStartDate(date)} minDate={addDays(new Date(), 1)} 
            maxDate={addDays(new Date(), 14)} locale={ko} disabledKeyboardNavigation inline showOtherMonths="false"/>
          </div>
            <Form.Label style={styles.BBa}>예약 시간 선택</Form.Label>
            <div style={styles.BBt}>
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
            <Button style={styles.Bto} variant="primary" type="submit">
              예약
            </Button>
          </div>
        </Form.Group>
        <br></br>
      </Form>
    </div>
  );
}

const styles = {

  Bto : { //예약 버튼
      position: 'absolute',
      flex: 1,
      flexDirection: 'row',
      marginTop: '3%',
      flexDirection: 'column',
      borderRadius: '10px',
      top: '100%',
      right: '36%',
      fontSize: '23px',
  },

    BBt : { //시간 

      padding: '1em', /* 여백으로 높이설정 */
      position: 'absolute',
      marginTop: '3%',
      fontSize: '34px',

      right: '10%',
      bottom: '15%',
      borderRadius: '30px',
      color: '#000000',
      background: '#ecebf3',
      

  },

  BBa : { //예약시간선택
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    marginTop: '3%',
    flexDirection: 'column',
    
    padding: '1em', /* 여백으로 높이설정 */
    position: 'fixed',
    right: '12%',
    bottom: '79%',
    fontSize: '22px',
    borderRadius: '20px',
    color: '#ffffff',
    background: '#687693',
    width: '10%',
    height: '70px',
    

  },

  BBs : { //예약날짜선택
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    marginTop: '3%',
    flexDirection: 'column',
    
    padding: '1em', /* 여백으로 높이설정 */
    position: 'fixed',
    right: '60%',
    bottom: '80%',
    fontSize: '22px',
    borderRadius: '20px',
    color: '#ffffff',
    background: '#687693  ',
    width: '10%',
    height: '70px',
    

  },

  BBk : { //달력
    
    padding: '2em', /* 여백으로 높이설정 */
    marginTop: '3%',
    right: '37%',
    bottom: '15%',
    borderRadius: '30px',
    color: '#000000',
    background: '#ecebf3',
    
    // position: 'fixed',
    position: 'absolute',

  },
  
}
  
export default Reservation;
