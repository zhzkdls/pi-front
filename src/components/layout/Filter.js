import { useState } from "react";
import { Form } from "react-bootstrap";
import "../../App.css";

export default function Filter({faci, toggleFaci, pharmacy, togglePharmacy, parking, toggleParking, searchFaci, setFaciSearchBool}) {

  const [InputText, setInputText] = useState("");
  let btnnm = "검색";

  const onSubmit = (e) => {
    e.preventDefault();
    if(InputText === ""){
      alert("검색어를 입력해 주세요");
    }else{
      searchFaci(InputText);
      toggleFaci(false);
      togglePharmacy(false);
      toggleParking(false);
      setFaciSearchBool(true);
      setInputText("");
    }
  };

  const onChange = (e) => {
    setInputText(e.target.value);
  }

  const isCheckFaci = () => {
    toggleFaci(!faci);
    togglePharmacy(false);
    toggleParking(false);
    setFaciSearchBool(false);
  }
  const isCheckPharmacy = () => {
    toggleFaci(false);
    togglePharmacy(!pharmacy);
    toggleParking(false);
    setFaciSearchBool(false);
  }
  const isCheckParking = () => {
    toggleFaci(false);
    togglePharmacy(false);
    toggleParking(!parking);
    setFaciSearchBool(false);
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
          </div>
        </div>
      </div>
  );
}