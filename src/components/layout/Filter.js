import { useState } from "react";
import { Form } from "react-bootstrap";
import "../../App.css";

export default function Filter({faci, toggleFaci, pharmacy, togglePharmacy, parking, toggleParking, searchFaci, isSelectedLoSe, fillsearched}) {

  const [InputText, setInputText] = useState("");
  let faciSearcher;
  let btnnm = "검색";

  const onSubmit = (e) => {
    e.preventDefault();
    searchFaci(InputText);
  };

  const onChange = (e) => {
    setInputText(e.target.value);
  }

  const isCheckFaci = () => {
    toggleFaci(!faci);
    togglePharmacy(false);
    toggleParking(false);
  }
  const isCheckPharmacy = () => {
    toggleFaci(false);
    togglePharmacy(!pharmacy);
    toggleParking(false);
  }
  const isCheckParking = () => {
    toggleFaci(false);
    togglePharmacy(false);
    toggleParking(!parking);
  }

  if(fillsearched === true){
    //btnnm = "지우기";
    //fillsearched = false;
  }else{
    btnnm = "검색";
  }
  
  return (
    <div className="search-box">
      <div className="container">
        <div className="row mb-2">
          <div className="col-auto" id="category">
            <div className="btn-group btn-group-sm" role="group" aria-label="Basic checkbox toggle button group">

              <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" onClick={isCheckFaci}/>
              <label className={'btn btn-' + (faci ? 'primary' : 'secondary')} htmlFor="btncheck1">체육시설</label>

              <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" onClick={isCheckPharmacy}/>
              <label className={'btn btn-' + (pharmacy ? 'primary' : 'secondary')} htmlFor="btncheck2">약국</label>

              <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" onClick={isCheckParking}/>
              <label className={'btn btn-' + (parking ? 'primary' : 'secondary')} htmlFor="btncheck3">주차장</label>

            </div>
          </div>

          <Form className="col-12 col-lg" onSubmit={onSubmit} >
              <div className="input-group input-group-sm" >
                <input 
                  placeholder="검색어를 입력하세요"
                  onChange={onChange}
                  value={InputText}
                  className="form-control"
                />
                  <button className="btn btn-primary" type="submit">{btnnm}</button>
              </div>
          </Form> 

          {/* <Form className="col-12 col-lg" onSubmit={onSelectLS}>
            <div className="input-group input-group-sm">
              <div className="col-6 col-lg px-0">
                <Form.Select aria-label="Default select example" onChange={onLocation}>
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
              </div>
              <div className="col-6 col-lg px-0 ">    
                    <Form.Select aria-label="Default select example" onChange={onService}>
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
                <button className="btn btn-primary" type="submit">검색</button>
              </div>
            </Form> */}
          </div>
        </div>
      </div>
  );
}