import React from 'react';
import styled from "styled-components";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner1 from '../images/Banner1.png';
import Banner2 from '../images/Banner2.png';


export default function YoutubeSlider() {
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 5,
        variableWidth: false,
      };
    return (
        
        <div>
            <Container>
            <Slider {...settings}>   
            <>
            <BannerImg src ={Banner1} alt ="banner1"/>
            </>
            <>
            <BannerImg src = {Banner2} alt ="banner2"/>
            </>
            <>
            <BannerImg src ={Banner1} alt ="banner1"/>
            </>
            <>
            <BannerImg src = {Banner2} alt ="banner2"/>
            </>
            <>
            <BannerImg src ={Banner1} alt ="banner1"/>
            </>
            <>
            <BannerImg src = {Banner2} alt ="banner2"/>
            </>
            <>
            <BannerImg src ={Banner1} alt ="banner1"/>
            </>
            <>
            <BannerImg src = {Banner2} alt ="banner2"/>
            </>
            <>
            <BannerImg src ={Banner1} alt ="banner1"/>
            </>
            <>
            <BannerImg src = {Banner2} alt ="banner2"/>
            </>
            <>
            <BannerImg src ={Banner1} alt ="banner1"/>
            </>
            <>
            <BannerImg src = {Banner2} alt ="banner2"/>
            </>
            <>
            <BannerImg src ={Banner1} alt ="banner1"/>
            </>
            <>
            <BannerImg src = {Banner2} alt ="banner2"/>
            </>

            </Slider>
            </Container>
        </div>
    );
}

const Container = styled.div`
	width: 1400px;
    margin: 0px auto;
    margin-bottom: 200px;
    /* overflow-x:scroll;
    scroll-snap-type: x mandatory; */

    /* overflow:hidden; */

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
  height: 240px;
  width:320px;
  padding:0px auto;
  margin: 0px auto;
  cursor:pointer;

`;