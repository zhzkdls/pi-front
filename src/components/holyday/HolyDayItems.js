import Table from 'react-bootstrap/Table';
import React, {useState} from 'react';

function HolyDayItems(props) {

    const { hldySeq, fcSeq, tcbizBgngYmd, tcbizEndTmd, stat} = props.holyday;

    return ( 
        <div>
            <Table striped bordered hover variant="dark" style={{textAlign: "center", margin: "0px", padding: "0px"}}>
                <tbody>
                    <tr>
                    <td>{hldySeq}</td>
                    <td>{fcSeq}</td>
                    <td>{tcbizBgngYmd}</td>
                    <td>{stat}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
     );
}

export default HolyDayItems;