import React from "react";
import styled from "styled-components";
import AppBar from "../components/AppBar";
import BannerSlider from "../components/BannerSlider";
import Categories from "../components/Categories";
import Login from "../images/login.png";
import WrapBox from "../styled-components/WrapBox";


export default function Home() {
  return (
    <div>

      <WrapBox>
      {/* <Categories/> */}
      <AppBar />

        <BannerBox>
          <BannerSlider/>
          <LoginSevice><LoginImg src={Login} alt="Login" /></LoginSevice>
        </BannerBox>

      </WrapBox>
    </div>
  );
}


const BannerBox = styled.div`
  display: flex;
  padding: 200px 40px 40px 40px;
`;

const LoginSevice = styled.div`
  padding: 0px 40px 40px 40px;
  margin-left: 30px;
  width: 500px;
  height: 600px;
`
const LoginImg = styled.img`
  background-image: url(${Login});
  width:100%;

`;