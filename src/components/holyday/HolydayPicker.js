import React, {useState} from 'react';
import DatePicker from "react-multi-date-picker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import moment from "moment";

function HolydayPicker() {
    const fcSeq = useParams().fcSeq;
    const [startDate, setStartDate] = useState([]);

    const [holyDay, setHolyDay] = useState({
        hldySeq:0,
        fcSeq:0,
        tcbizBgngYmd: "",
        tcbizEndTmd: "",
        stat: 1,
    });

    const addHolyDay = (e) => {
        e.preventDefault();
        for (let i = 0; i < startDate.length; i++) {
            holyDay.tcbizBgngYmd = startDate[i];
            holyDay.fcSeq=fcSeq;
            fetch("http://localhost:8080/hldy/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(holyDay),
            })
        }
        console.log(startDate[0]);
    };

    return ( 
        <Form onSubmit={addHolyDay} className="container" style={{alignItems:"center", justifyContent: "center"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center",}}>
                <DatePicker value={setStartDate} onChange={date => setStartDate(date)} minDate={new Date()} 
                format="YYYY-MM-DD" multiple="true"/>
            </div>
            <Button variant="primary" type="submit">
                확인
            </Button>
        </Form>
     );
}

export default HolydayPicker;