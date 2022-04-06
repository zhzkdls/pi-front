import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import DatePicker from "react-multi-date-picker";
import "../../App.css";
export default function Filter() {
  const [startDate, setStartDate] = useState(new Date());
  const [InputText, setInputText] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };


  const handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };
  return (
    <div className="search-box">
      <div className="container">
        <div className="row">
          <div className="col-4 offset-lg-3">
              <div className="input-group">
                <input className="form-control rounded-0"
                  placeholder="검색어를 입력하세요"
                  onChange={onChange}
                  value={InputText}
                />
                <div className="input-group-append">
                <button className="btn btn-primary rounded-0" type="submit">검색</button>
                </div>
              </div>
          </div>
          <div className="col-4">
            <div className="search">
              <div className="input-group">
                <Form.Select className="rounded-0" aria-label="Default select example">
                <option>서비스 선택</option>
                <option value="1">축구장</option>
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
                <Form.Select className="rounded-0" aria-label="Default select example">
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
              </div>
              {/* <div className="input-group-append">
                <div className="input-group">
                  <DatePicker
                  showTimeSelect
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  timeClassName={handleColor}
                  placeholder="날짜를 선택하세요"
                  className="form-control"
                />
                <div className="input-group-append">
                <Button variant="warning">검색</Button>{" "}
                </div>
                </div>
                
              </div> */}
            
            {/* <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={setHours(setMinutes(new Date(), 0), 12)}
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeSelect
          /> */}
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
