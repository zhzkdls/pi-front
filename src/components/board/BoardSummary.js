import React from "react";
import { Link } from "react-router-dom";

const BoardSummary = () => {
    

    return ( 
        <div>
           <Link to={"/post"}><button> + 더보기</button></Link>
            <div className="row">
                <div className="col-12 col-lg-4 px-lg-0">
                    <div className="card border-0">              
                    <div className="card-body">
                        <h5 className="font-weight-700 mb-3">공지사항 제목</h5>
                        <p className="text-truncate2 text-secondary" style={{height: "52px"}}>
                        공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용
                        공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용
                        공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용
                        공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용
                        공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용
                        </p>
                        <div className="text-end">2022-04-05</div>
                    </div>              
                    </div>
                </div>
                <div className="col-12 col-lg-4 px-lg-0 border-start border-end">
                    <div className="card border-0">              
                    <div className="card-body">
                    <h5 className="font-weight-700 mb-3">공지사항 제목</h5>
                        <p className="text-truncate2 text-secondary" style={{height: "52px"}}>
                        공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용
                        공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용
                        공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용
                        공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용
                        공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용
                        </p>
                        <div className="text-end">2022-04-03</div>
                    </div>              
                    </div>
                </div>
                <div className="col-12 col-lg-4 px-lg-0">
                    <div className="card border-0">              
                    <div className="card-body">
                    <h5 className="font-weight-700 mb-3">공지사항 제목</h5>
                        <p className="text-truncate2 text-secondary" style={{height: "52px"}}>
                        공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용
                        공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용
                        공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용
                        공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용
                        공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용 공지사항 내용
                        </p>
                        <div className="text-end">2022-04-01</div>
                    </div>              
                    </div>
                </div>
            </div>
        </div>
     );
}

export default BoardSummary;
