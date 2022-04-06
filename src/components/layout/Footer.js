import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../../App.css";
function Footer() {
  return (
    <div id="footer" className="bg-dark py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12">            
            <address className="text-white mb-0">부산 금정구 중앙대로 1617-12 푸르지오아파트 상가2층 207호 한가람IT전문학원</address>
            <p className="text-muted mb-0">Copyright &copy; 2022 제일잘나가는 조 All rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
