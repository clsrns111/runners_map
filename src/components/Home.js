import React, { useRef, useEffect } from "react";
/*global kakao*/

function Home() {
  const container = document.querySelector(".map");
  const options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };

  const container1 = useRef(null); //지도를 담을 영역의 DOM 레퍼런스
  const container2 = useRef(null); //지도를 담을 영역의 DOM 레퍼런스
  const container3 = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

  useEffect(() => {
    new kakao.maps.Map(container1.current, options); //지도 생성 및 객체 리턴
    new kakao.maps.Map(container2.current, options); //지도 생성 및 객체 리턴
    new kakao.maps.Map(container3.current, options); //지도 생성 및 객체 리턴
    return () => {};
  }, []);

  return (
    <>
      <div className="main_title">
        <small>러닝 코스 공유사이트</small>
        <h1>Runner's on the map</h1>
      </div>
      <div
        className="map"
        style={{
          zIndex: "1",
          padding: "100px",
          width: "300px",
          height: "300px",
        }}
        ref={container1}
      ></div>
      <div
        className="map"
        style={{ width: "300px", height: "300px" }}
        ref={container2}
      ></div>
      <div
        className="map"
        style={{ width: "300px", height: "300px" }}
        ref={container3}
      ></div>
    </>
  );
}

export default Home;
