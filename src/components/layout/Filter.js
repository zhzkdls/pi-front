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
        <div className="row mb-2">
          <div className="col-auto" id="category">
            <div className="btn-group btn-group-md" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off"/>
            <label className="btn btn-primary" htmlFor="btncheck1">스포츠</label>

            <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off"/>
            <label className="btn btn-secondary" htmlFor="btncheck2">약국</label>

            <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off"/>
            <label className="btn btn-primary" htmlFor="btncheck3">주차장</label>
          </div>
            {/* <ul id="category">
              <li>
                체육시설
              </li>
              <li id="PM9" data-order="2">
                <span className="category_bg pharmacy"></span>
                약국
              </li>
              <li id="PK6" data-order="3">
                <span className="category_bg store"></span>
                주차장
              </li>
            </ul> */}
          </div>
          <div className="col-auto">
              <div className="input-group">
              
                <input className="form-control"
                  placeholder="검색어를 입력하세요"
                  onChange={onChange}
                  value={InputText}
                />
                
                <button className="btn btn-primary" type="submit">검색</button>
                
              </div>
          </div>
        </div>
        <div className="row">
          
          
          <div className="col-12">
            <div className="search">
              <div className="input-group">
                <Form.Select className="" aria-label="Default select example">
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
                <Form.Select className="" aria-label="Default select example">
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
