import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import React, {useState} from 'react';
import { RESERVATIONBACKEND } from "../../_actions/types";

const ReservationItems = (props) => {
    const { rsvtSeq, fcSeq, userId, userTel, rsvtYmd, rsvtHr, rsvtPdt, rsvtRtrchDt, rsvtAprvDt, rsvtRcptDt, rsvtMdfcnDt, operHr, stat} = props.reservation;
    const [message, setMessage] = useState("");

    const deleteReservation = () => {
        fetch(`${RESERVATIONBACKEND}/reservation/delete/${rsvtSeq}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }, 
        })
        .then(response => response.text())
        .then(message => {
            setMessage(message);
        });
        window.location.reload();
    };


    return (
        <div style={{textAlign: "center"}} >
            <Table striped bordered hover variant="dark" style={{textAlign: "center", margin: "0px", padding: "0px"}}>
            <tbody className="container">
                <tr>
                <td>{rsvtSeq}</td>
                <td>{fcSeq}</td>
                <td>{userId}</td>
                <td>{userTel}</td>
                <td>{rsvtYmd}</td>
                <td>{rsvtHr}</td>
                <td>{rsvtPdt}</td>
                <td>{rsvtRtrchDt}</td>
                <td>{rsvtAprvDt}</td>
                <td>{rsvtRcptDt}</td>
                <td>{rsvtMdfcnDt}</td>
                <td>{operHr}</td>
                <td>{stat}</td>
                <td><Link to={`${RESERVATIONBACKEND}/reservation/edit/` + rsvtSeq} className="btn btn-primary" variant="primary">예약수정</Link></td>
                <td>
                    <Button type="button" onClick={deleteReservation} className="btn btn-primary" variant="primary">예약취소</Button></td>
                </tr>
            </tbody>
            </Table>
        </div>
    );
};

export default ReservationItems;