import React, {useEffect, useState} from 'react';

const { kakao } = window;

function MapContainer2({faci, pharmacy, parking}) {

    const [facit, setFacit] = useState([]);
    
    useEffect(() => {
      fetch("http://localhost:8081/tbfacit/getAll")
        .then((res) => res.json())
        .then((res) => {
            setFacit(res)
        });
        
        var container = document.getElementById('map');
        var options, map;
        var marker, markers = [];

        options = {
            center: new kakao.maps.LatLng(35.17973316713768, 129.07505674557024),
            level: 5
        };
        
        map = new kakao.maps.Map(container, options); 

        kakao.maps.event.addListener(map, 'center_changed', function() {
            var level = map.getLevel();
            var latlng = map.getCenter(); 
            var moveLatLon = new kakao.maps.LatLng(latlng.getLat(), latlng.getLng());
            map.setCenter(moveLatLon);
            map.setLevel(level);
        });

        if(faci === true){
            for (let i = 0; i < facit.length; i++) {
                marker = new kakao.maps.Marker({
                    map:map,
                    position: new kakao.maps.LatLng(facit[i].faciPointY, facit[i].faciPointX),
                    title: facit[i].faciNm
                });
                markers.push(marker);
            }
        }else{
            for (let j = 0; j < facit.length; j++) {
                markers.push(null);
            }
        }
        
    }, [faci]);

    return ( 
        <div>
            <div id="map" style={ {width:"1600px", height:"600px", alignItems:"center"} }></div>
        </div>
     );
}

export default MapContainer2;