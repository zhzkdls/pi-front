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
        <option>지역 선택</option>
        <option value="금정구">금정구</option>
        <option value="강서구">강서구</option>
        <option value="기장군">기장군</option>
        <option value="남구">남구</option>
        <option value="동래구">동래구</option>
        <option value="동구">동구</option>
        <option value="사상구">사상구</option>
        <option value="사하구">사하구</option>
        <option value="서구">서구</option>
        <option value="수영구">수영구</option>
      </Form.Select>
      <Form.Select aria-label="Default select example">
        <option>서비스 선택</option>
        <option value="축구장">축구장</option>
        <option value="야구장">야구장</option>
        <option value="테니스장">테니스장</option>
        <option value="하키장">하키장</option>
        <option value="골프연습장">골프연습장</option>
        <option value="사격장">사격장</option>
        <option value="수영장">수영장</option>
        <option value="씨름장">씨름장</option>
        <option value="육상경기장">육상경기장</option>
        <option value="게이트볼장">게이트볼장</option>
        <option value="조정카누장">조정카누장</option>
        <option value="생활체육관">생활체육관</option>
      </Form.Select>
      <Form.Select>
        <option value="생활체육관">생활체육관</option>
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
