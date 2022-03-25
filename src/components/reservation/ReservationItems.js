import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { Button } from "react-bootstrap";


const ReservationItems = (props) => {
    const { rsvtSeq, fcSeq, userId, userTel, rsvtYmd, rsvtHr, rsvtPdt, rsvtRtrchDt, rsvtAprvDt, rsvtRcptDt, rsvtMdfcnDt, operHr, stat} = props.reservation;

    const deleteReservation = () => {
        axios
        .delete(`http://localhost:8081/reservation/delete/${rsvtSeq}`)
        .then((res) => window.location.replace("/"))
        .catch((error) => console.log(error));
    };


    return (
        <div style={{textAlign: "center"}} >
            <Table striped bordered hover variant="dark">
            <tbody>
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
                <td><Link to={"http://localhost:8081/reservation/edit/" + rsvtSeq} className="btn btn-primary" variant="primary">예약수정</Link></td>
                <td><Button onClick={deleteReservation} className="btn btn-primary" variant="primary">예약취소</Button></td>
                </tr>
            </tbody>
            </Table>
        </div>
    );
};

export default ReservationItems;