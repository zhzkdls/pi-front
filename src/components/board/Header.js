import React from 'react';

const Header = () => {

    return (
        <div style = {styles.container}>
            <h1 style = {styles.title}>공지사항</h1>
            <select style={styles.container} >
                <option value="">선택하세요</option>
                <option to="/board" value="1">공지사항</option>
                <option to="/notice"value="2">민원게시판</option>
            </select>
        </div>
    )
}

const styles = {
    container: {
        textAlign: 'center',
        width: '100%',
        borderBottom: '1px solid lightgray',
    },
    title: {
        marginTop: '50px',
        marginBottom: '40px',
        color: '#212529'
    },
}
export default Header;