import React, {useState, useEffect} from 'react';
import {Calendar} from "react-multi-date-picker";
import { Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import addDays from "date-fns/addDays";
import "react-multi-date-picker/styles/colors/teal.css"

function FacitDetailDatePicker() {
    const fcSeq = useParams().fcSeq;
    const [startDate, setStartDate] = useState(new Date());

    const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
    const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

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
                <Calendar className="teal" value={startDate} onChange={date => setStartDate(date)} 
                minDate={addDays(new Date(), 1)} maxDate={addDays(new Date(), 14)} 
                disableYearPicker disableMonthPicker weekDays={weekDays} months={months}
                mapDays={({ date }) => {
                    let props = {}
                    let isWeekend = [0, 6].includes(date.weekDay.index);
                    if (isWeekend) props.className = "highlight highlight-red";
                    return props;
                }}
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