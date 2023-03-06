declare const window: typeof globalThis & {
  kakao: any;
};

export const makeMap = (address) => {
  console.log(address, "--------addresssssMAP");

  const container = document.getElementById("map");
  const options = {
    center: new window.kakao.maps.LatLng(37.54755539, 127.02952787),
    level: 3,
  };

  const map = new window.kakao.maps.Map(container, options);

  const geocoder = new window.kakao.maps.services.Geocoder();

  const marker = new window.kakao.maps.Marker({
    position: map.getCenter(),
  });

  marker.setMap(map);

  geocoder.addressSearch(address, function (result, status) {
    // 정상적으로 검색이 완료됐으면
    if (status === window.kakao.maps.services.Status.OK) {
      const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

      // 결과값으로 받은 위치를 마커로 표시합니다
      const marker = new window.kakao.maps.Marker({
        map,
        position: coords,
      });

      // 인포윈도우로 장소에 대한 설명을 표시합니다
      const infowindow = new window.kakao.maps.InfoWindow({
        content:
          '<div style="width:150px;text-align:center;padding:6px 0;">거래위치</div>',
      });
      infowindow.open(map, marker);

      // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
      map.setCenter(coords);
    }
  });
};
