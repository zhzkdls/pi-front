import React, {useState} from 'react';
import DatePicker from "react-multi-date-picker";
import { Button, Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import opacity from "react-element-popper/animations/opacity";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { RESERVATIONBACKEND } from '../../_actions/types';


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
            fetch(`${RESERVATIONBACKEND}/hldy/save`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(holyDay),
            })
        }
    };

    return ( 
        <Form onSubmit={addHolyDay} className="container" style={{alignItems:"center", justifyContent: "center"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center",}}>
                <DatePicker className="rmdp-mobile" value={setStartDate} onChange={date => setStartDate(date)} 
                minDate={new Date()} animations={[opacity()]} format="YYYY-MM-DD" multiple="true" style={{width:"600px"}} 
                plugins={[<DatePanel />]} portal disableYearPicker disableMonthPicker />
            </div>
            <Button variant="primary" type="submit">
                확인
            </Button>
        </Form>
     );
}

export default HolydayPicker;