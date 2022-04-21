import React , { useState } from 'react';

const Search = ({handleSearch}) => {
    const [pstgTitle, setPstgTitle] = useState(''); // input 창에 입력한 text
    const [searchType, setType] = useState("pstgTitle", "pstgCn"); // select 창에서 고른 type

    const handleInputChange = ({target}) => {
        setPstgTitle(target.value);
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    return (
        <div>
            <select onChange={handleTypeChange} style = {styles.select}>
                <option value="pstgTitle">제목</option>
                <option value="pstgCn">내용</option>
                <option value="all">제목 + 내용</option>
            </select>
            <input 
            onChange={handleInputChange} 
            style = {styles.input}  
            placeholder="검색어를 입력하세요"
            ></input>
            <button onClick={() => handleSearch(pstgTitle, searchType)} style = {styles.searchBtn}>검색</button>
        </div>
    )
}

const styles = {
    input: {
        width: '400px',
        padding: '.3em', /* 여백으로 높이설정 */
    },
    searchBtn: {
        marginLeft: '5px',
        marginBottom: '50%',
        border: 'none',
        fontSize: 'medium',
        borderRadius: '3px',
        color: '#f8f9fa',
        background: '#343a40',
        padding: '.3em', /* 여백으로 높이설정 */
    },
    select: {
        width: '100px',
        padding: '.3em .5em', /* 여백으로 높이설정 */
        marginRight: '5px',
        
        
    },
   
}
export default Search;