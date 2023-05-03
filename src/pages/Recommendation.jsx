import React from "react";
import AppBar from "../components/AppBar";
import SideBar from "../components/SideBar";
import TotalWrap from "../styled-components/TotalWrap";
import WrapBox from "../styled-components/WrapBox";
export default function Recommendation() {
  return (
    <div>
      <>
      <TotalWrap>
      <AppBar />
        <WrapBox>
      <SideBar/>
        
        </WrapBox>
        </TotalWrap>
      </>
    </div>
  );
}
