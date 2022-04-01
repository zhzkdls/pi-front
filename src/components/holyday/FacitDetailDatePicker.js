import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {ko} from "date-fns/esm/locale"
import { Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import $ from 'jquery';
import HolyDayItems from './HolyDayItems';

function FacitDetailDatePicker() {
    const fcSeq = useParams().fcSeq;
    const [startDate, setStartDate] = useState(new Date());
    const [disableDate, setDisableDate] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/hldy/getAllByhldySeq/${fcSeq}`)
        .then((res) => res.json())
        .then((res) => {
        console.log(1, res);
        setDisableDate(res);
        });
    }, [fcSeq]);

    return ( 
        <Form className="container" style={{alignItems:"center", justifyContent: "center"}}>

            

            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center",}}>
                <DatePicker name="tcbizBgngYmd" selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} locale={ko} 
                excludeDates={disableDate.tcbizBgngYmd} inline dateFormat="yyyy-MM-dd" />
            </div>
        </Form>
     );
}

export default FacitDetailDatePicker;