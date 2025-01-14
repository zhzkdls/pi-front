import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FacitDetailDatePicker from "../holyday/FacitDetailDatePicker";
import UseIsMount from "../UseIsMount";
import FacitMap2 from './FacitMap2';
import Comment from '../comment/Comment';
import { Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectUser } from '../../_reducers';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { RESERVATIONBACKEND } from '../../_actions/types';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import addDays from "date-fns/addDays";
import {ko} from "date-fns/esm/locale"
import "../../App.css";

function FacitDetail() {
  const user = useSelector(selectUser);

  const fcSeq = useParams().fcSeq;
  const isMount = UseIsMount;

  const NoUser = withReactContent(Swal);
  const [startDate, setStartDate] = useState(new Date());

  const [facit, setFacit] = useState({
      fcSeq:"",
      faciNm: "",
      faciRoadAddr1: "",
      faciHomepage: '',
      faciPointX:"",
      faciPointY:"",
  });

  const NoLogin = () => {
    NoUser.fire({
      title: "로그인 후 이용해 주세요!",
      icon: 'error',
    });
  }

  useEffect(() => {
      axios.get(`${RESERVATIONBACKEND}/tbfacit/get/${fcSeq}`)
      .then((res) => {
        if (isMount) {
            setFacit(res.data);
        }    
      });
  }, [fcSeq, isMount]);

  return ( 
  <div>
    <div style={styles.div} className='div container'>
        <div >
          <Card border="dark" style={styles.form}>
            <Card.Header>체육시설</Card.Header>
            <Card.Body>
              <Card.Text>
              <h4> 장소 : {facit.faciNm}</h4><br/>
              <h4> 주소 : {facit.faciRoadAddr1}</h4><br/>
              <h4> 사이트 : {facit.faciHomepage}</h4><br/>
              <h4> 전화번호 : {facit.fmngUserTel}</h4><br/>
              <h4> 시설 : {facit.fcobNm}</h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <br />
        <div style={styles.BBk}>
        <DatePicker  name="rsvtYmd" selected={startDate} onChange={date => setStartDate(date)} minDate={addDays(new Date(), 1)} 
            maxDate={addDays(new Date(), 14)} locale={ko} disabledKeyboardNavigation inline showOtherMonths="false"/>
        {/* <FacitDetailDatePicker className=" mx-auto my-3 py-3 rounded-4 "/> */}
        </div>
        {user ?(
          <>
            <Link to={"/reservation/" + fcSeq} style={styles.Pick} variant="primary">예약하기</Link>
          </>
        ):
          (
            <>
              <Button className='primary' onClick={NoLogin} style={styles.Pick}>예약하기</Button>
            </>
          )
        }
        <Link to={"/reservationList/" + fcSeq} style={styles.Pickm} variant="primary">예약현황</Link>
    </div>
    <TabsUnstyled className="container mx-auto my-3 py-3 rounded-4 shadow" defaultValue={2}>
      <TabsList>
          <Tab>이용안내</Tab>
          <Tab>장소안내</Tab>
          <Tab>이용후기</Tab>
      </TabsList>
      <TabPanel value={0}> 
      <strong style={styles.p}>필수 준수사항</strong>
      <br/>
      <hr />
      <p style={styles.p}>
        모든 서비스의 이용은 담당 기관의 규정에 따릅니다. 각 시설의 규정 및 허가조건을 반드시 준수하여야 합니다.
        각 관리기관의 시설물과 부대시설을 이용함에 있어 담당자들과 협의 후 사용합니다.
        각 관리기관의 사고 발생시 부산시청에서는 어떠한 책임도 지지않습니다.
        시설이용료 납부는 각 관리기관에서 규정에 준합니다.
        본 사이트와 각 관리기관의 규정을 위반할 시에는 시설이용 취소 및 시설이용 불허의 조치를 취할 수 있습니다.
        접수 시간을 기준으로 브라우저에서 새로고침을 하면 변경된 정보를 볼 수 있습니다.
      </p>
      <strong style={styles.p}>시설예약</strong>
      <br/>
      <hr />
      <p style={styles.p}>     
        비회원일 경우에는 실명 확인을 통하여 사용하실 수 있으며 부산시 통합 회원에 가입하시게 되면 부산시에서 제공하는 다양하고 많은 혜택을 받으실 수 있습니다.
      </p><br/>

    </TabPanel>
      <TabPanel value={1}>
        지도
        <br/>
        <hr />
        <FacitMap2 key={facit.fcSeq} map1={facit} />
      </TabPanel>
      <TabPanel value={2}>
          공공시설을 직접 이용한 이용자들의 이용후기를 확인하세요.
        <br/>
        <hr />
          <form >
            <Comment fcSeq={fcSeq}/>
          </form>
        </TabPanel>
    </TabsUnstyled>
    </div>
  );
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  cursor: pointer;
  font-size: 1.275rem;
  font-weight: bold;
  color: white;
  background-color: transparent;
  width: 50%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[800]};
  }


  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  /* &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  } */
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 1.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

const styles = {
  p : {
    marginLeft: '30px',
  },
  div : {
    color: '#483D8B',
  },

  form : {
      position: 'absolute',
      marginTop: '165px',
      marginLeft: '700px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '1em',
      width: '35rem',

  },


  Pick : {
    position: 'absolute',
    padding: '1.2em', /* 여백으로 높이설정 */
    width: '8%',
    display: 'flex',
    marginLeft: '790px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    color: '#FFFFFF',
    background: '#007FFF',
    borderRadius: '10px',
    bottom: '28%',   
    textDecoration: 'none'
  },

  Pickm : {
    position: 'absolute',
    padding: '1.2em', /* 여백으로 높이설정 */
    width: '8%',
    display: 'flex',
    marginLeft: '1020px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    color: '#FFFFFF',
    background: '#007FFF',
    borderRadius: '10px',
    bottom: '28%',   
    textDecoration: 'none'
  },

  BBk : { //달력
    padding: '4em', /* 여백으로 높이설정 */
    right: '48%',
    bottom: '20%',
    position: 'absolute',
  },
}

export default FacitDetail;


