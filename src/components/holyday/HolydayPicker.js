import React, {useState} from 'react';
import moment from "moment";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {ko} from "date-fns/esm/locale"
import { Button, Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";


function HolydayPicker() {
    const fcSeq = useParams().fcSeq;
    const [startDate, setStartDate] = useState(new Date());

    const [holyDay, setHolyDay] = useState({
        hldySeq:0,
        fcSeq:0,
        tcbizBgngYmd: "",
        tcbizEndTmd: "",
        stat: 1,
    });

    const addHolyDay = (e) => {
        e.preventDefault();

        holyDay.tcbizBgngYmd = moment(startDate).format("YYYYMMDD");
        holyDay.fcSeq=fcSeq;
        fetch("http://localhost:8080/hldy/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(holyDay),
        })
        console.log(holyDay);
    };

    return ( 
        <Form onSubmit={addHolyDay} className="container" style={{alignItems:"center", justifyContent: "center"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center",}}>
                <DatePicker name="tcbizBgngYmd" selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} locale={ko}
                dateFormat="yyyy-MM-dd" inline />
            </div>
            <Button variant="primary" type="submit">
                확인
            </Button>
        </Form>
     );
}

export default HolydayPicker;