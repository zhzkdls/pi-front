import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import React, {useState} from 'react';

function FacitItem(props) {

    const { fcSeq, faciNm, faciGbNm, fcobNm, ftypeNm, fmngTypeGbNm, fmngCpNm, fmngCpbNm, fmngUserTel, faciRoadAddr1, faciHomepage, 
        faciStat, totFaciArea, mdfr, nationYn, stat, updated} = props.facit;

    const [message, setMessage] = useState("");

    const deleteFacit = () => {
        fetch(`http://localhost:8081/tbfacit/delete/${fcSeq}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }, 
        })
        .then(response => response.text())
        .then(message => {
            setMessage(message);
            console.log(message);
        });
        window.location.reload();
    };

    return ( 
        <div>
            <Table striped bordered hover variant="dark" style={{textAlign: "center", margin: "0px", padding: "0px"}}>
            <tbody>
                <tr>
                <td>{fcSeq}</td>
                <td> <Link to={"/facit/" + fcSeq} variant="primary" style={{color: "white", textDecoration: 'none'}} >{faciNm}</Link></td>
                <td>{faciGbNm}</td>
                <td>{fcobNm}</td>
                <td>{ftypeNm}</td>
                <td>{fmngTypeGbNm}</td>
                <td>{fmngCpNm}</td>
                <td>{fmngCpbNm}</td>
                <td>{fmngUserTel}</td>
                <td>{faciRoadAddr1}</td>
                <td>{faciHomepage}</td>
                <td>{faciStat}</td>
                <td>{totFaciArea}</td>
                <td>{mdfr}</td>
                <td>{nationYn}</td>
                <td>{updated}</td>
                <td>{stat}</td>
                <td><Link to={"http://localhost:8081/tbfacit/edit/" + fcSeq} className="btn btn-primary" variant="primary">수정</Link></td>
                <td>
                    <Button type="button" onClick={deleteFacit} className="btn btn-primary" variant="primary">삭제</Button></td>
                </tr>
            </tbody>
            </Table>
        </div>
     );
}

export default FacitItem;