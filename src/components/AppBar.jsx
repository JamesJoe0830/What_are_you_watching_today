import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsPlayBtnFill, BsPerson, BsSearch, BsMoon } from "react-icons/bs";
import Recommendation from "../pages/Recommendation";


const MoveToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}; // 상단으로 이동 (beahvior : auto, smooth)

export default function AppBar() {
  const navigate = useNavigate();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const handleSideBarOpen = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div>
      <AppBarBox>
        <AppBarTop>
          {" "}
          <Login>로그인</Login>
          <SelfInfo>
            <BsPerson />
          </SelfInfo>
        </AppBarTop>
        <AppBarBottom>
          <LogoBox>
            <CategoriesBox
              onClick={(e) => {
                handleSideBarOpen();
                // navigate("/Categories");
              }}
            >

              <BsPlayBtnFill />
            </CategoriesBox>
            <LogoName
              onClick={() => {
                navigate("/");
                MoveToTop();
              }}
            >
              {" "}
              오늘 뭐 볼까 ?
            </LogoName>
          </LogoBox>
          <SearchBoxDiv>
            <SearchDiv>
              {" "}
              무엇을 검색하시겠습니까 ?
              {/* <input type="text" value={search} onChange={onChange} /> */}
            </SearchDiv>
            <SearchButton>
              <Search>
                <BsSearch />
              </Search>
            </SearchButton>
          </SearchBoxDiv>
          <MenuBoxDiv>
            <MenuDiv
              onClick={() => {
                navigate("/Recommendation");
                MoveToTop();
              }}
            >
              {" "}
              추천{" "}
            </MenuDiv>
            <MenuDiv
              onClick={() => {
                navigate("/Top20");
                MoveToTop();
              }}
            >
              {" "}
              Top20{" "}
            </MenuDiv>
            <MenuDiv
              onClick={() => {
                navigate("/Notice");
                MoveToTop();
              }}
            >
              {" "}
              게시판{" "}
            </MenuDiv>
          </MenuBoxDiv>
          <Mode>
            <BsMoon />
          </Mode>
        </AppBarBottom>
      </AppBarBox>
    </div>
  );
}
const AppBarBox = styled.div`
  /* background: linear-gradient(to bottom, #000000, #4f4f51); */
  background: #000000;

  position: fixed;
  top: 0;
  width: 100%;
  /* max-width: 1600px; */
  margin: 0 auto;
  overflow: hidden;
`;
const AppBarTop = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0px 40px 0px 10px;
  color: white;
`;
const Login = styled.div`
  padding: 10px;
  justify-content: center;
  align-self: center;
  cursor: pointer;
`;
const SelfInfo = styled.div`
  font-size: 30px;
  padding: 5px;
  cursor: pointer;
`;
const AppBarBottom = styled.div`
  display: flex;
  color: #d5d5d5;
  font-size: 20px;
  border-top: solid 3px white;
  border-bottom: solid 3px white;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 20px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
`;
const LogoBox = styled.div`
  display: flex;
  padding: 20px;
`;
const CategoriesBox = styled.button`
  border: 10px;
  background-color: transparent;
  color: white;
  font-size: 30px;
  cursor: pointer;
  opacity: 1;
  border-radius: 10px;
`;
const LogoName = styled.div`
  margin-left: 20px;
  font-size: 30px;
  cursor: pointer;
`;
const SearchBoxDiv = styled.div`
  display: flex;
  border-left: solid 2px white;
  border-right: solid 2px white;
`;

const SearchDiv = styled.div`
  padding: 16px 300px 12px 27px;
  font-size: 20px;
  color: grey;
`;

const SearchButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 10px;
  opacity: 0.5;
`;

const Search = styled.div`
  font-size: 25px;
  color: white;
  cursor: pointer;
`;
const MenuBoxDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  font-weight: bolder;
  cursor: pointer;
`;
const Mode = styled.div`
  font-size: 40px;
  cursor: pointer;
`;
const MenuDiv = styled.div`
  /* margin: 0px 40px 0px 20px; */
  padding: 18px 40px 18px 40px;
  text-align: center;
  border-radius: 5px;
  transition: all 0.9s, color 0.3;

  &:hover {
    background-color: #717171;
    color: rgb(255, 255, 255, 100);
  }
`;
