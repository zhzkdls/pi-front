import React, {useState, useEffect} from 'react';
import {Calendar} from "react-multi-date-picker";
import { Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import addDays from "date-fns/addDays";


function FacitDetailDatePicker() {
    const fcSeq = useParams().fcSeq;
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        fetch(`http://localhost:8081/hldy/getAllByhldySeq/${fcSeq}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.length);
            for(let i = 0; i < data.length; i++){
                setDisableDate(data.ymdFormat)
            }
        setDisableDate(data);
        });
    }, [fcSeq]);

    return ( 
        <Form className="container" style={{alignItems:"center", justifyContent: "center"}}>
            <div style={styles.Calen}>
                <Calendar value={startDate} onChange={date => setStartDate(date)} 
                minDate={addDays(new Date(), 1)} maxDate={addDays(new Date(), 14)} 
                disableYearPicker disableMonthPicker 
                />
            </div>
        </Form>
    );
}

const styles = {
    Calen : {
        position: 'absolute',
        marginLeft: '100px',

        padding: '5em', /* 여백으로 높이설정 */
        bottom: '45%', 
    },
}
export default FacitDetailDatePicker;