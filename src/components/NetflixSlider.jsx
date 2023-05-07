import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Netflix1 from "../images/Netflix1.png";
import Netflix2 from "../images/Netflix2.png";

export default function NetflixSlider() {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 5,
    variableWidth: false,
  };
  return (
    <div>
      <Container>
        <Slider {...settings}>
          <>
            <BannerImg src={Netflix1} alt="Netflix1" />
          </>
          <>
            <BannerImg src={Netflix2} alt="Netflix2" />
          </>
          <>
            <BannerImg src={Netflix1} alt="Netflix1" />
          </>
          <>
            <BannerImg src={Netflix2} alt="Netflix2" />
          </>
          <>
            <BannerImg src={Netflix1} alt="Netflix1" />
          </>
          <>
            <BannerImg src={Netflix2} alt="Netflix2" />
          </>
          <>
            <BannerImg src={Netflix1} alt="Netflix1" />
          </>
          <>
            <BannerImg src={Netflix2} alt="Netflix2" />
          </>
          <>
            <BannerImg src={Netflix1} alt="Netflix1" />
          </>
          <>
            <BannerImg src={Netflix2} alt="Netflix2" />
          </>
        </Slider>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 1500px;
  margin: 0px auto;
  margin-bottom: 200px;

  /* overflow:hidden; */

  /* overflow-x: scroll;
    scroll-snap-type: x mandatory; */
  /* 스크롤로 통제 */

  .slick-dots {
    .slick-active {
      button::before {
        color: #c1c1c1;
      }
    }
    button::before {
      color: #e9e9e9;
    }
  }
`;
const BannerImg = styled.img`
  height: 300px;
  width: 200px;
  border-radius: 20px;
  padding: 10px;
  cursor:pointer;
`;
