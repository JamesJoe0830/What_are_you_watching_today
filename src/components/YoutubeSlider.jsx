import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../images/Banner1.png";
import Banner2 from "../images/Banner2.png";
const rankList = {
  Youtube: [
    {
      id: 1,
      rank: 1,
      image:
        "https://file.miricanvas.com/template_thumb/2021/06/06/17/10/kasscx5ug4owoktr/thumb.jpg",
    },
    {
      id: 2,
      rank: 2,
      image: "https://i.ytimg.com/vi/Uidupj_sAO8/maxresdefault.jpg"
        ,
    },
    {
      id: 3,
      rank: 3,
      image:
        "https://i.ytimg.com/vi/0f4G4yAWOv0/maxresdefault.jpg",
    },
    {
      id: 4,
      rank: 4,
      image:
        "https://i.ytimg.com/vi/zNB6gpcQXng/maxresdefault.jpg",
    },
    {
      id: 5,
      rank: 5,
      image:
        "https://i.ytimg.com/vi/MRIvSNGO4vY/maxresdefault.jpg",
    },
    {
      id: 6,
      rank: 6,
      image: 
      "https://www.naeponews.co.kr/news/photo/202109/11481_13991_3815.jpg",
    },
    {
      id: 7,
      rank: 7,
      image: "https://i.ytimg.com/vi/eHXCjEdohWc/maxresdefault.jpg",
    },
    {
      id: 8,
      rank: 8,
      image:
        "https://i.ytimg.com/vi/rk-yNZj3qv0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDBqWqEHtO7hvuMdE_pZ3IY3D3H2A",
    },
    {
      id: 9,
      rank: 9,
      image: "https://openads-real.s3.amazonaws.com/openadsAdmin/images/contsThumb/contsThumb_0905122747417_%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.jpg",
    },
    {
      id: 10,
      rank: 10,
      image: "https://i.ytimg.com/vi/w9TON4IwR2w/maxresdefault.jpg",
    },
  ],
};

export default function YoutubeSlider() {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: false,
  };
  return (
    <div>
      <Container>
        <Slider {...settings}>
        {rankList.Youtube.map((props) => {
          return (
            <div key={props.id}>
              <ContentsBox>
                <RankImg>{props.rank}</RankImg>
                <BannerImg src={props.image} alt="rank" />
              </ContentsBox>
            </div>
          );
        })}
         
        </Slider>
      </Container>
    </div>
  );
}

const Container = styled.div`
  /* background-color: white; */
  width: 1200px;
  margin: 0px auto;
  margin-top: 30px;
  margin-bottom: 160px;
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

// const BannerImg = styled.img`
//   height: 180px;
//   width: 270px;
//   padding: 0px auto;
//   margin: 0px auto;
//   cursor: pointer;
// `;

const SlideBox = styled.div`
  display: flex;
  width: 1300px;
  height: 240px;
  margin: 0px auto;
  overflow:hidden;
  /* background:white; */
  /* overflow:auto;
    white-space: nowrap; */
  /* overflow-x: scroll;
    scroll-snap-type: x mandatory; */
`;
const ContentsBox = styled.div`
  display: flex;
  height: 200px;
  width: 180px;
  /* overflow:hidden; */
  /* position:bottom; */
`;
const RankImg = styled.div`
  /* background-color: #e0dede; */

  position: absolute;
  bottom: 0;

  height: 120px;
  color: #1e1e1e;
  -webkit-text-stroke: 2px #acacac;
  font-size: 120px;
  font-weight: 700;
  text-shadow: 3px 4px 5px black;
  z-index: 1;
`;
const BannerImg = styled.img`
  position: absolute;
  right:-1;
  height: 160px; 
  width: 256px; 
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  /* z-index: 98; */
  
`;



