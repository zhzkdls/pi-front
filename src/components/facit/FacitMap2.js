import React, {useEffect} from 'react';

const { kakao } = window;

function FacitMap2(props) {

    const {faciPointX, faciPointY} = props.map1;
    useEffect(()=>{
        var container = document.getElementById('map');
        var options;
        var map;
        var markerPosition;
        var marker;
        console.log(faciPointX);
        console.log(faciPointY);
        if(faciPointX === 0 || faciPointY === 0){
            options = {
                center: new kakao.maps.LatLng(35.17973316713768, 129.07505674557024),
                level: 3
            };
            map = new kakao.maps.Map(container, options);

            markerPosition  = new kakao.maps.LatLng(35.17973316713768, 129.07505674557024); 
            marker = new kakao.maps.Marker({
                position: markerPosition
            })
        }else{
            options = {
                center: new kakao.maps.LatLng(faciPointY, faciPointX),
                level: 3
            };
            map = new kakao.maps.Map(container, options);
      
            markerPosition  = new kakao.maps.LatLng(faciPointY, faciPointX); 
            marker = new kakao.maps.Marker({
                position: markerPosition
            });
        }
        marker.setMap(map);
    }, [faciPointX, faciPointY])

    return ( 
        <div>
            <div id="map" style={ {width:"1600px", height:"600px", margin:"0px", padding:"0px", alignItems:"center"} }></div>
        </div>
     );
}

export default FacitMap2;