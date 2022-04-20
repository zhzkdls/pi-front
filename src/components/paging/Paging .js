import React, { useState } from "react";
import './Paging.css';
import Pagination from "react-js-pagination";

const Paging = ({page, count, setPage}) => {

    // const [page, setPage] = useState(1);
    // const handlePageChange = (page) => { 
    //     setPage(page); 
    //     console.log(page)
    // };
    
    return (
        <Pagination 
        activePage={page}   //현재 페이지
        itemsCountPerPage={10} //한 페이지당 보여줄 리스트 아이템의 개수
        totalItemsCount={450}  //총 아이템의 개수
        pageRangeDisplayed={5}  // Paginator 내에서 보여줄 페이지의 범위
        prevPageText={"‹"} //"이전"을 나타낼 텍스트 (prev, <, ...)
        nextPageText={"›"}  // "다음"을 나타낼 텍스트 (next, >, ...)
        onChange={handlePageChange} // 페이지가 바뀔 때 핸들링해줄 함수
        />
        );
     };

export default Paging;

