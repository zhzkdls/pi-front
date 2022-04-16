import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";
import { Link } from "react-router-dom";


const { kakao } = window;

const MapContainer = ({ searchPlace, faci, pharmacy, parking, faciSearch, fillsearched, setFillSearched}) => {

  const [Places, setPlaces] = useState([]);
  const [facit, setFacit] = useState([]);
  const searchedFacit = [];
  let itda = false;
  let dataorder = "";

  useEffect(() => {

    // 체육시설 불러오기

    //fetch("http://localhost:8081/tbfacit/getAll")

    fetch("http://192.168.0.36:8081/tbfacit/getAll")
    .then((res) => res.json())
    .then((res) => {
        setFacit(res)
    });

    // 마커를 클릭했을 때 해당 장소의 상세정보를 보여줄 커스텀오버레이입니다
    let placeOverlay = new kakao.maps.CustomOverlay({ zIndex: 1 }),
      contentNode = document.createElement("div"), // 커스텀 오버레이의 컨텐츠 엘리먼트 입니다
      currCategory = ""; // 현재 선택된 카테고리를 가지고 있을 변수입니다
    let searchedfaciMarkers = [], facimarkers = [], markers = [];
    let facimarker;
    let marker;
    let overlays = [];

    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(35.17973316713768, 129.07505674557024),
      level: 6,
    };

    const map = new kakao.maps.Map(container, options);
    // 장소 검색 객체를 생성합니다
    const pss = new kakao.maps.services.Places(map);

    kakao.maps.event.addListener(map, "idle", searchPlaces);
    contentNode.className = "placeinfo_wrap";

    // 커스텀 오버레이의 컨텐츠 노드에 mousedown, touchstart 이벤트가 발생했을때
    // 지도 객체에 이벤트가 전달되지 않도록 이벤트 핸들러로 kakao.maps.event.preventMap 메소드를 등록합니다
    addEventHandle(contentNode, "mousedown", kakao.maps.event.preventMap);
    addEventHandle(contentNode, "touchstart", kakao.maps.event.preventMap);

    // 커스텀 오버레이 컨텐츠를 설정합니다
    placeOverlay.setContent(contentNode);

    if(faci === true){
      
      displayFaciMarker(facit);
      
    }else{
      for (let j = 0; j < facit.length; j++) {
        facimarkers.push(null);
      }
    }

    

    if(fillsearched === true){
      //searchedFacit.clear();
      //console.log(searchedFacit.length);
      for (let i = 0; i < facit.length; i++) {
        if(facit[i].fcobNm.includes(faciSearch) || facit[i].faciNm.includes(faciSearch) || facit[i].faciRoadAddr1.includes(faciSearch)){
          
          searchedFacit.push(facit[i]);
        }
      }

      //console.log(searchedFacit);
      for (let j = 0; j < searchedFacit.length; j++) {
             facimarkers.push(null);
      }

      displayFaciMarker(searchedFacit);

      //itda = true;

    }

    // if(itda === true){
    //   for (let i = 0; i < searchedFacit.length; i++) {
    //     facimarker = new kakao.maps.Marker({
    //       map:map,
    //       position: new kakao.maps.LatLng(searchedFacit[i].faciPointY, searchedFacit[i].faciPointX),
    //       clickable: true,
    //       title:searchedFacit.faciNm
    //     });
    //     searchedfaciMarkers.push(facimarker);
    //   }
    //   itda = false;
    // }else{
    //   for (let j = 0; j < searchedFacit.length; j++) {
    //     searchedfaciMarkers.push(null);
    //   }
    // }

    if(pharmacy === true){
      dataorder = "2";
      searchPlaces();
    }else{
      currCategory = '';
      removeMarker();
    }

    if(parking === true){
      dataorder = "3";
      searchPlaces();
    }else{
      currCategory = '';
      removeMarker();
    }

    // 엘리먼트에 이벤트 핸들러를 등록하는 함수입니다
    function addEventHandle(target, type, callback) {
      if (target.addEventListener) {
        target.addEventListener(type, callback);
      } else {
        target.attachEvent("on" + type, callback);
      }
    }

    // 카테고리 검색을 요청하는 함수입니다
    function searchPlaces() {
      // 커스텀 오버레이를 숨깁니다
      placeOverlay.setMap(null);

      // 지도에 표시되고 있는 마커를 제거합니다
      removeMarker();
      if(pharmacy === true){
        pss.categorySearch('PM9', placesSearchCB, { useMapBounds: true });
      }
      if(parking === true){
        pss.categorySearch('PK6', placesSearchCB, { useMapBounds: true });
      }
    }

    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    //const pagination = 1
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면 지도에 마커를 표출합니다
        displayPlaces(data);
      }
    }

    // 지도에 마커를 표출하는 함수입니다
    function displayPlaces(places) {
      // 몇번째 카테고리가 선택되어 있는지 얻어옵니다
      // 이 순서는 스프라이트 이미지에서의 위치를 계산하는데 사용됩니다
      let order = dataorder;

      for (let i = 0; i < places.length; i++) {
        // 마커를 생성하고 지도에 표시합니다
        marker = addMarker(new kakao.maps.LatLng(places[i].y, places[i].x), order);

        // 마커와 검색결과 항목을 클릭 했을 때
        // 장소정보를 표출하도록 클릭 이벤트를 등록합니다
        (function (marker, place) {
          kakao.maps.event.addListener(marker, "click", function () {
            displayPlaceInfo(place);
          });
        })(marker, places[i]);
      }
    }

    // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
    function addMarker(position, order) {
      let imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png';
      // 마커 이미지 url, 스프라이트 이미지를 씁니다
      let imageSize = new kakao.maps.Size(30, 30), // 마커 이미지의 크기
        imgOptions = {
          spriteSize: new kakao.maps.Size(72, 208), // 스프라이트 이미지의 크기
          spriteOrigin: new kakao.maps.Point(46, order * 36), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
          offset: new kakao.maps.Point(27, 69), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imgOptions
        ),
        marker = new kakao.maps.Marker({
          position: position, // 마커의 위치
          image: markerImage,
        });

      marker.setMap(map); // 지도 위에 마커를 표출합니다
      markers.push(marker); // 배열에 생성된 마커를 추가합니다
      return marker;
    }

      // 지도 위에 표시되고 있는 마커를 모두 제거합니다
      function removeMarker() {
        for ( var i = 0; i < markers.length; i++ ) {
            markers[i].setMap(null);
        }   
        markers = [];

      }

    // 클릭한 마커에 대한 장소 상세정보를 커스텀 오버레이로 표시하는 함수입니다
    function displayPlaceInfo(place) {
      let content =
        '<div class="placeinfo">' +
        '   <a class="title" href="' +
        place.place_url +
        '" target="_blank" title="' +
        place.place_name +
        '">' +
        place.place_name +
        "</a>";

      if (place.road_address_name) {
        content +=
          '    <span title="' +
          place.road_address_name +
          '">' +
          place.road_address_name +
          "</span>" +
          '  <span class="jibun" title="' +
          place.address_name +
          '">(지번 : ' +
          place.address_name +
          ")</span>";
      } else {
        content +=
          '    <span title="' +
          place.address_name +
          '">' +
          place.address_name +
          "</span>";
      }

      content +=
        '    <span class="tel">' +
        place.phone +
        "</span>" +
        "</div>" +
        '<div class="after"></div>';

      contentNode.innerHTML = content;
      placeOverlay.setPosition(new kakao.maps.LatLng(place.y, place.x));
      placeOverlay.setMap(map);
    }

    //시설마커표시
    function displayFaciMarker(list){
      for (let i = 0; i < list.length; i++) {

        var content = '<div class="overlaybox">' +
        '    <div class="boxtitle">체육시설 정보<button type="button" class="btn-close float-end text-secondary" id="close" onclick="makeOutListener()"></button></div>' +
        '    <div class="first">' +
        
        '        <div class="facititle text">'+list[i].faciNm+'</div>' +
        '    </div>' +
        '    <ul>' +
        '        <li class="up">' +
        
        '            <span class="title">종류 : '+list[i].fcobNm+'</span>' +
        '            <span class="arrow up"></span>' +
        '        </li>' +
        '        <li>' +
        
        '            <span class="title">연락처 : '+list[i].fmngUserTel+'</span>' +
        '            <span class="arrow up"></span>' +
        
        '        </li>' +
        '        <li>' +
        
        '            <span class="title">'+list[i].faciRoadAddr1+'</span>' +
        '            <span class="arrow up"></span>' +
        
        '        </li>' +        
        '    </ul>' +
        '</div>';

        
        var imageSrc = "";
        
        if(list[i].ftypeNm == "축구장"){
          imageSrc = '../img/marker03.png'
        }else if(list[i].ftypeNm == "야구장"){
          imageSrc = '../img/marker07.png'
        }else if(list[i].ftypeNm == "테니스장"){
          imageSrc = '../img/marker06.png'
        }else if(list[i].ftypeNm == "배드민턴장"){
          imageSrc = '../img/marker02.png'
        }else if(list[i].ftypeNm == "간이운동장"){
            imageSrc = '../img/marker09.png'  
        }else if(list[i].ftypeNm == "수영장"){
              imageSrc = '../img/marker08.png'
        }else{
          imageSrc = '../img/marker01.png'
        }
        var  imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
            imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
            markerPosition = new kakao.maps.LatLng(list[i].faciPointY, list[i].faciPointX); // 마커가 표시될 위치입니다

          facimarker = new kakao.maps.Marker({
            map:map,
            position: new kakao.maps.LatLng(list[i].faciPointY, list[i].faciPointX),
            //clickable: true,
            //content: content,
            image: markerImage,
            title:list[i].faciNm,
          });


          

          // 커스텀 오버레이를 생성합니다
          var customOverlay = new kakao.maps.CustomOverlay({
              position: new kakao.maps.LatLng(list[i].faciPointY, list[i].faciPointX),
              content: content,
              xAnchor: 0.44,
              // yAnchor: 0.91
              yAnchor:1.09
          });

          
              

          kakao.maps.event.addListener(facimarker, 'click', makeOverListener(map, facimarker, customOverlay));
          kakao.maps.event.addListener(map, 'click', makeOutListener(map, facimarker, customOverlay));

                   
          overlays.push(customOverlay);
          facimarkers.push(facimarker);
          
      }
    }

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
    function makeOverListener(map, marker, customOverlay) {
      return function() {
        
        for(var i = 0; i < overlays.length; i++){
          overlays[i].setMap(null);
        }

        customOverlay.setMap(map);
       
        // 지도 중심을 이동 시킵니다
        map.setCenter(marker.getPosition());

      };
    }

    function makeOutListener() {
      return function() {
        
        for(var i = 0; i < overlays.length; i++){
          overlays[i].setMap(null);
        }

      };
    }

  

  }, [searchPlace, faci, pharmacy, parking, fillsearched, itda]);

  return (
    <div className="wrap">
      <div id="myMap" style={{ width: "100%", height: "100vh",}} >
        {/* <div>
          <ul id="category">
            <li data-order="1">
            <span className="category_bg pharmacy"></span>
              체육시설
            </li>
            <li id="PM9" data-order="2">
              <span className="category_bg pharmacy"></span>
              약국
            </li>
            <li id="PK8" data-order="3">
              <span className="category_bg store"></span>
              주차장
            </li>
          </ul>
        </div> */}
      </div>

      <div className="container my-3 px-4 py-2 border-5 border-secondary shadow" style = {styles.notice}>
        <div className="text-end">
          <span className="me-2">
          <FontAwesomeIcon icon={faPlus} />
          </span>
            <Link to={"/post"} style={{color:"black"}}><span>더보기</span></Link>
        </div>
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
        {/* <BoardSummary/> */}
      </div>

      <div id="result-list">
        {Places.map((item, i) => (
          <div key={i} style={{ marginTop: "20px" }}>
            <span>{i + 1}</span>
            <div>
              <h5>{item.place_name}</h5>
              {item.road_address_name ? (
                <div>
                  <span>{item.road_address_name}</span>
                  <span>{item.address_name}</span>
                </div>
              ) : (
                <span>{item.address_name}</span>
              )}
              <span>{item.phone}</span>
            </div>
          </div>
        ))}
        <div id="pagination"></div>
      </div>
    </div>
  );
};

const styles = {
  notice: {
      backgroundColor: '#fff',
      position: 'absolute',
      left: '50%',
      bottom: '50px',
      transform: 'translate(-50%,0)',
      borderRadius: '15px'
      
  }
}

export default MapContainer;
