import React, {useEffect} from 'react';
import $ from "jquery";

const { kakao } = window;

function FacitMap2(props) {

    const {faciPointX, faciPointY} = props.map1;


    useEffect(()=>{
        var container = document.getElementById('map');
        var options = {
          center: new kakao.maps.LatLng(35.11732559, 129.0157718),
          level: 3
        };
        var map = new kakao.maps.Map(container, options);

        var markerPosition  = new kakao.maps.LatLng(35.11732559, 129.0157718); 
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    }, [])

    return ( 
        <div>
            <div id="map" style={ {width:"1900px", height:"500px"} }></div>
        </div>
     );
}

export default FacitMap2;