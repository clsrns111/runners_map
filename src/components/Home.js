/*global kakao*/
import React, { useRef, useEffect, useState } from "react";
import "../css/home.css";

function Home() {
  const options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };

  const container1 = useRef(null); //지도를 담을 영역의 DOM 레퍼런스
  const container2 = useRef(null); //지도를 담을 영역의 DOM 레퍼런스
  const container3 = useRef(null); //지도를 담을 영역의 DOM 레퍼런스

  useEffect(() => {
    //typing_ani(ment);
    setEmoji();
    new kakao.maps.Map(container1.current, options); //지도 생성 및 객체 리턴
    new kakao.maps.Map(container2.current, options); //지도 생성 및 객체 리턴
    new kakao.maps.Map(container3.current, options); //지도 생성 및 객체 리턴
    return () => {};
  }, []);
  // setInterval(() => {
  //   const ment = document.querySelector(".ment");
  //   ment.textContent = "당신의 경험을 공유해주세요🏃‍♂️";
  //   if ((ment.textContent = "당신의 경험을 공유해주세요🏃‍♂️")) {
  //     ment.textContent = "당신의 경험을 공유해주세요🚶‍♂️";
  //   }
  // }, 0);
  function setEmoji() {
    for (let i = 0; i < 5; i++) {}
  }
  setInterval(() => {
    setEmoji();
  }, 1000);

  return (
    <>
      <div className="main_title">
        <small>러닝 코스 공유사이트</small>
        <h1>Runner's on the Map🏃</h1>
        <div className="ment_wrapper">
          <span className="ment">당신의 지도를 공유해주세요</span>
        </div>
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
