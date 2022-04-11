import { render } from "@testing-library/react";
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

  const [cname, setCname] = useState("btn btn-primary");

  const [isActive1, setisActive1]=useState(true);
  const [isActive2, setisActive2]=useState(true);
  const [isActive3, setisActive3]=useState(true);

  const onChangecName1 = () => {
    if(isActive2 === false || isActive3 === false){
      setisActive1(false);
      setisActive2(true);
      setisActive3(true);
    }
    setisActive1(false);
  };

  const onChangecName2 = () => {
    if(isActive1 === false || isActive3 === false){
      setisActive1(true);
      setisActive2(false);
      setisActive3(true);
    }
    setisActive2(false);
  };

  const onChangecName3 = () => {
    if(isActive1 === false || isActive2 === false){
      setisActive1(true);
      setisActive2(true);
      setisActive3(false);
    }
    setisActive3(false);
  };
  
  return (
    <div className="search-box">
      <div className="container">
        <div className="row mb-2">

          <div className="col-auto" id="category">
            <div className="btn-group btn-group-sm" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" onChange={onChangecName1}/>
            <label className={'btn btn-' + (isActive1 ? 'primary' : 'secondary')} htmlFor="btncheck1">스포츠</label>

            <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" onChange={onChangecName2}/>
            <label className={'btn btn-' + (isActive2 ? 'primary' : 'secondary')} htmlFor="btncheck2">약국</label>

            <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" onChange={onChangecName3}/>
            <label className={'btn btn-' + (isActive3 ? 'primary' : 'secondary')} htmlFor="btncheck3">주차장</label>
          </div>

            {/* <ul id="category">
              <li>
                체육시설
              </li>
              <li id="PM9" data-order="2">
                <span classNameName="category_bg pharmacy"></span>
                약국
              </li>
              <li id="PK6" data-order="3">
                <span classNameName="category_bg store"></span>
                주차장
              </li>
            </ul> */}
          </div>
          <div className="col-12 col-lg">
              <div className="input-group input-group-sm">
              
                <input className="form-control"
                  placeholder="검색어를 입력하세요"
                  onChange={onChange}
                  value={InputText}
                />
                
                <button className="btn btn-primary" type="submit">검색</button>
                
              </div>
          </div>
          <div className="col-6 col-lg px-0">
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
          <div className="col-6 col-lg px-0">    
                <Form.Select className="" aria-label="Default select example">
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
              </div>
          </div>
        </div>
      </div>
  );
}