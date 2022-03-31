import React, {useState} from 'react';
import moment from "moment";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {ko} from "date-fns/esm/locale"
import { Button, Form } from 'react-bootstrap';

function FacitDetailDatePicker() {

    const [startDate, setStartDate] = useState(new Date());

    return ( 
        <Form className="container" style={{alignItems:"center", justifyContent: "center"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center",}}>
                <DatePicker name="tcbizBgngYmd" selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} locale={ko} editable={false} 
                disabledKeyboardNavigation inline />
            </div>
        </Form>
     );
}

export default FacitDetailDatePicker;