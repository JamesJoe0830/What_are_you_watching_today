import React from "react";
import styled from "styled-components";
import AppBar from "../components/AppBar";
import BannerSlider from "../components/BannerSlider";

import Login from "../images/login.png";
import WrapBox from "../styled-components/WrapBox";
import TotalWrap from "../styled-components/TotalWrap";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div>  
<AppBar />
      <TotalWrap>
     
      <WrapBox>
      <SideBar/>
      {/* <Categories/> */}
  

        <BannerBox>
          <BannerSlider/>
          <LoginSevice><LoginImg src={Login} alt="Login" /></LoginSevice>
        </BannerBox>

      </WrapBox>
      </TotalWrap>
    </div>
  );
}

const BannerBox = styled.div`
  display: flex;
  padding: 200px 40px 40px 40px;
  margin: 0 auto;
`;

const LoginSevice = styled.div`
  padding: 0px 40px 40px 40px;
  margin-left: 30px;
  width: 400px;
  height: 600px;
`
const LoginImg = styled.img`
  background-image: url(${Login});
  width:100%;

`;