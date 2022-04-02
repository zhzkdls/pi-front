import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import DatePicker from "react-multi-date-picker";
import "../../App.css";
export default function Filter() {
  const [startDate, setStartDate] = useState(new Date());

  const handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };
  return (
    <div className="search">
      <Form.Select aria-label="Default select example">
        <option>서비스 선택</option>
        <option value="1">추구장</option>
        <option value="2">야구장</option>
        <option value="3">테니스장</option>
        <option value="4">하키장</option>
        <option value="5">골프연습장</option>
        <option value="6">사격장</option>
        <option value="7">수영장</option>
        <option value="8">씨름장</option>
        <option value="9">육상경기장</option>
        <option value="10">게이트볼장</option>
        <option value="11">조정카누장</option>
        <option value="12">생활체육관</option>
      </Form.Select>
      <Form.Select aria-label="Default select example">
        <option>지역 선택</option>
        <option value="1">금정구</option>
        <option value="2">강서구</option>
        <option value="3">기장군</option>
        <option value="4">남구</option>
        <option value="5">동래구</option>
        <option value="5">동구</option>
        <option value="6">사상구</option>
        <option value="7">사하구</option>
        <option value="8">서구</option>
        <option value="3">수영구</option>
        <option value="5">동래구</option>
      </Form.Select>
      {/* <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      minDate={setHours(setMinutes(new Date(), 0), 12)}
      dateFormat="MM/dd/yyyy h:mm aa"
      showTimeSelect
    /> */}
      <DatePicker
        showTimeSelect
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        timeClassName={handleColor}
      />
      <Button variant="warning">search</Button>{" "}
    </div>
  );
}
