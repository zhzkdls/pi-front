import React, {useState} from 'react';
import moment from "moment";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {ko} from "date-fns/esm/locale"
import { Button, Form } from 'react-bootstrap';

function HolydayPicker() {

    const [startDate, setStartDate] = useState(new Date());

    const today = moment();

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

        fetch("http://localhost:8080/hldy/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(holyDay),
        })
        console.log(holyDay);
    };

    const changeValue = (e) => {
    setHolyDay({
        ...setHolyDay,
        [e.target.name]: e.target.value,
    });
    };

    return ( 
        <Form onSubmit={addHolyDay} className="container" style={{alignItems:"center", justifyContent: "center"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center",}}>
                <DatePicker name="tcbizBgngYmd" selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} locale={ko} editable={false} disabledKeyboardNavigation inline />
            </div>
            <Button variant="primary" type="submit">
                확인
            </Button>
        </Form>
     );
}

export default HolydayPicker;