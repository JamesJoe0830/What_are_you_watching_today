import React from "react";
import AppBar from "../components/AppBar";
import styled from "styled-components";
import TotalWrap from "../styled-components/TotalWrap";
import WrapBox from "../styled-components/WrapBox";
import SideBar from "../components/SideBar";
import Youtube from "../images/YoutubeLogo.png";
import Netflix from "../images/NetflixLogo.png";
import Watcha from "../images/WatchaLogo.png";

import YoutubeSlider from "../components/YoutubeSlider";
import NetflixSlider from "../components/NetflixSlider";

export default function Top20() {
  return (
    <div>
      <TotalWrap>
        <AppBar />

        <WrapBox>
          <SideBar />
          <TotalOttBox>
            <OttBox>
              <OttLogoImg>
                <YoutubeImg src={Youtube} alt="youtubeLogo" />
              </OttLogoImg>
              <Top20Div> 유투브 상위 20 콘텐츠</Top20Div>

              <SliderBox>
                <YoutubeSlider />
              </SliderBox>
            </OttBox>
            <OttBox>
              <OttLogoImg>
                <NetflixImg src={Netflix} alt="NetflixLogo" />
              </OttLogoImg>
              <Top20Div> 넷플릭스 상위 20 콘텐츠</Top20Div>

              <SliderBox>
                <NetflixSlider />
              </SliderBox>
            </OttBox>
            <OttBox>
              <OttLogoImg>
                <WathchaImg src={Watcha} alt="WatchaLogo" />
              </OttLogoImg>
              <Top20Div> 디즈니플러스  상위 20 콘텐츠</Top20Div>

              <SliderBox>
                <NetflixSlider />
              </SliderBox>
            </OttBox>
          </TotalOttBox>
        </WrapBox>
      </TotalWrap>
    </div>
  );
}
const TotalOttBox = styled.div`
  /* position: relative; */
`;

const OttBox = styled.div`
 
`;

const OttLogoImg = styled.div`
  /* display: flex; */
  width: 150px;
  margin: 50px;
`;
const Top20Div = styled.div`
  display:flex;
  color:white;
  margin:20px 20px 20px 80px;
  font-size:25px;
  font-weight: 700px;
`;
const YoutubeImg = styled.img`
  width: 100%;
`;
const NetflixImg = styled.img`
  width: 100%;
`;
const WathchaImg = styled.img`
  width: 100%;
`;
const SliderBox = styled.div`
  /* width:100%; */
  /* height:400px; */

`;
