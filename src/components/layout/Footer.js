import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../../App.css";
function Footer() {
  return (
    <div id="footer" className="fixed-bottom mb-1">
      <div className="container py-3 px-5 bg-dark rounded-4 shadow">
        <div className="row">
          <div className="col-12">            
            <p className="text-muted text-center mb-0"><small>부산 금정구 중앙대로 1617-12 푸르지오아파트 상가2층 207호 한가람IT전문학원 Copyright &copy; 2022 제일잘하는 조 All rights Reserved.</small></p>
            {/* <p className="text-muted mb-0">Copyright &copy; 2022 제일잘나가는 조 All rights Reserved.</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
