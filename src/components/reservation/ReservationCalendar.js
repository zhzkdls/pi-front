import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import addDays from "date-fns/addDays";
import React, {useState} from 'react';
import moment from "moment";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {ko} from "date-fns/esm/locale"

function ReservationCalendar() {

    const [startDate, setStartDate] = useState(new Date());

    const today = moment();
    const disableFutureDt = current => {
      return current.isBefore(today)
    }



    return ( 
        <div>
            <label>예약날짜 선택</label>
            <Calendar name="rsvtYmd" calendarType="US" onChange={setStartDate} value={startDate} minDate={new Date()} maxDate={addDays(new Date(), 30)}
            isValidDate={disableFutureDt} Other Days="Disable"/>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} maxDate={addDays(new Date(), 30)} locale={ko} editable={false} disabledKeyboardNavigation inline
            dateFormat="yyyy-MM-dd" />
        </div>
     );
}

export default ReservationCalendar;