import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import "../../App.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {ko} from "date-fns/esm/locale"
import addDays from "date-fns/addDays";
import axios from "axios";
import { useSelector } from 'react-redux';
import { selectUser } from '../../_reducers';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Reservation = () => {

  const user = useSelector(selectUser);
  const TimenonSelect = withReactContent(Swal);
  const ReservationSuccess = withReactContent(Swal);
  const ReservationFail = withReactContent(Swal);


  const fcSeq = useParams().fcSeq;
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const [reservation, setReservation] = useState({
    fcSeq: 0,
    userId: "",
    userTel: "",
    rsvtYmd: "",
    rsvtHr: "",
    rsvtPdt: 0,
    rsvtAprvDt: "",
    rsvtRcptDt: "",
    operHr: "",
    stat:2,
  });

  const addReservation = (e) => {

    e.preventDefault();

    if (reservation.rsvtHr.length === 0) {
      TimenonSelect.fire({
        title: "시간을 선택해 주세요!",
        icon: 'warning',
      });
      navigate("/reservation/" + fcSeq);
    }else{
      reservation.fcSeq = fcSeq;
      reservation.rsvtYmd = moment(startDate).format("YYYY-MM-DD");
      reservation.userId = user.userId,
      reservation.userTel = user.userPhone,
      
      axios.post("http://192.168.0.36:8081/reservation/save", reservation)
      .then(response => response.data)
      .then(message => {
        setMessage(message);
        if(message === "예약 완료!"){
          ReservationSuccess.fire({
            title: "예약되었습니다!",
            icon: 'success',
          });
          navigate("/facit/" + fcSeq);
        }else if(message !== "예약 완료!"){
          ReservationFail.fire({
            title: "예약 실패!",
            text:"이미 예약된 시간입니다.",
            icon: 'error',
          });
        }
      });
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
            <br></br>
            <DatePicker name="rsvtYmd" selected={startDate} onChange={date => setStartDate(date)} minDate={addDays(new Date(), 1)} 
            maxDate={addDays(new Date(), 14)} locale={ko} disabledKeyboardNavigation inline showOtherMonths="false"/>
          </div>
          <div>
            <Card border="dark" style={styles.form}>
              <Card.Header>예약 시간 선택</Card.Header>
              <Card.Body>
                <Card.Text>
                {/* <Form.Label>예약 시간 선택</Form.Label> */}
                  <div>
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
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <br />
        </Form.Group>
        <br></br>
      </Form>
    </div>
  );
}

const styles = {
  form : {
    position: 'absolute',
    marginTop: '200px',
    marginLeft: '950px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '1em',
    width: '20rem',
    fontSize: '1.53rem',

},

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

      right: '15%',
      bottom: '20%',
      borderRadius: '30px',
      

  },

  BBa : { //예약시간선택
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    marginTop: '3%',
    flexDirection: 'column',
    
    padding: '1em', /* 여백으로 높이설정 */
    position: 'fixed',
    right: '17%',
    bottom: '77%',
    fontSize: '22px',
    borderRadius: '20px',
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
    right: '55%',
    bottom: '77%',
    fontSize: '22px',
    borderRadius: '20px',
    width: '10%',
    height: '70px',
    

  },

  BBk : { //달력
    
    padding: '2em', /* 여백으로 높이설정 */
    marginTop: '5%',
    right: '37%',
    bottom: '20%',
    borderRadius: '30px',
    color: '#000000',
    
    // position: 'fixed',
    position: 'absolute',

  },
  
}
  
export default Reservation;
