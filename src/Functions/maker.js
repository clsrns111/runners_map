/*global kakao*/
function maker(map, clickPosition, distance) {
  var imageSrc =
      "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/microsoft/209/woman-running_1f3c3-200d-2640-fe0f.png", // 마커이미지의 주소입니다
    imageSize = new kakao.maps.Size(40, 50), // 마커이미지의 크기입니다
    imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
  var markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    ),
    markerPosition = new kakao.maps.LatLng(clickPosition.Ma, clickPosition.La); // 마커가 표시될 위치입니다

  // 마커를 생성합니다

  var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage, // 마커이미지 설정
  });
  console.log(distance);
  // 마커가 지도 위에 표시되도록 설정합니다
  if (distance) {
    marker.setMap(map);
  }

  // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
  var content =
    '<div class="overlay">' +
    '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
    '    <span class="title">길찾기</span><span class="title">주위맛집 찾기</span>' +
    "  </a>" +
    "</div>";

  // 커스텀 오버레이가 표시될 위치입니다
  var position = new kakao.maps.LatLng(clickPosition.Ma, clickPosition.La);

  // 커스텀 오버레이를 생성합니다

  if (!distance) {
    var customOverlay = new kakao.maps.CustomOverlay({
      map: map,
      position: position,
      content: content,
      yAnchor: 1,
    });
  }
}

export default maker;
