import React from 'react';

const Header = () => {
    return (
        <div style = {styles.container}>
            <h2 style = {styles.title}>공지사항</h2>
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
        marginBottom: '50px',
        color: '#212529'
    },
}
export default Header;