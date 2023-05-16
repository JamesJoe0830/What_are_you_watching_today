import React, { useState } from "react";
import Youtube from "../images/YoutubeLogo.png";
import Netflix from "../images/NetflixLogo.png";
import Disney from "../images/DisneyLogo.png";
import { Navigation } from "react-minimal-side-navigation";
// import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Icon } from "semantic-ui-react";
import styled from "styled-components";
const youtubeSubMenu = [
  {
    id: 1,
    category: "먹방",
  },
  {
    id: 2,
    category: "게임",
  },
  {
    id: 3,
    category: "예능",
  },
  {
    id: 4,
    category: "다큐",
  },
  {
    id: 5,
    category: "ASMR",
  },
];
export default function SideBar({ isOpen }) {
  // const [isOpen, setIsOpen] = useState(false); //menu 초기값을 false로 설정
  // const handleMenu = () => {
  //   setIsOpen (isOpen => !isOpen); // on off 개념
  // }

  const [isSubOpen, setIsSubOpen] = useState(false);
  const isSubMenuOpen = () => {
    setIsSubOpen((isSubOpen) => !isSubOpen);
  };
  return (
    <>
      <SideBarContainer isOpen={isOpen}>
        <CateTitle> 카테고리 </CateTitle>
        <OTTdiv
          onClick={() => {
            isSubMenuOpen();
          }}
        >
          <YoutubeImg src={Youtube} alt="youtubeLogo" />
        </OTTdiv>
        {isSubOpen && (
          <div>
            {youtubeSubMenu.map((props) => {
              return (
                <div key={props.id}>
                  <SubMeunBox>
                    <SubMenu>{props.category}</SubMenu>
                  </SubMeunBox>
                </div>
              );
            })}
          </div>
        )}
        <OTTdiv>
          <NetflixImg src={Netflix} alt="NetflixLogo" />
        </OTTdiv>
        <OTTdiv>
          <DisneyImg src={Disney} alt="DisneyLogo" />
        </OTTdiv>
      </SideBarContainer>
    </>
  );
}
const CateTitle = styled.div`
  font-size: 20px;
  /* margin: 0 auto; */
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 900;
`;
const OTTdiv = styled.div`
  border-top: 1px solid rgb(159, 159, 159);
  margin: 20px;
  padding-top: 20px;
`;
const YoutubeImg = styled.img`
  width: 50%;
`;
const NetflixImg = styled.img`
  width: 40%;
`;
const DisneyImg = styled.img`
  width: 40%;
  height: 40;
`;
const SideBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #000000;
  color: white;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
`;
const SubMeunBox = styled.div`
  font-size: 10px;
`;
const SubMenu = styled.div`
  font-size: 15px;
  margin-top: 20px;
`;
