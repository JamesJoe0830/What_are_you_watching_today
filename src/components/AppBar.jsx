import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsPlayBtnFill, BsPerson, BsSearch, BsMoon } from "react-icons/bs";
import SideMenu from "./SideMenu";
import SideBar from "./SideBar";
const MoveToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}; // 상단으로 이동 (beahvior : auto, smooth)

export default function AppBar() {
  const navigate = useNavigate();
  // const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false); //menu 초기값을 false로 설정
  const handleMenu = () => {
    setIsOpen (isOpen => !isOpen); // on off 개념
  }
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
                handleMenu();
                // navigate("/Categories");
              }}
            >
              {isOpen && <Overlay onClick={handleMenu}/>}
              <SideBar isOpen ={isOpen}/>
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
              {/* input tag */}
              <Searchinput
                type="text"
                placeholder="무엇을 찾고 계십니까?"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
              {/* value={search} onChange={onChange} */}
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
  z-index: 1000;
`;
const AppBarTop = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0px 40px 0px 10px;
  color: white;
`;
const Login = styled.div`
  font-size: 14px;
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
  font-size: 10px;
  border-top: solid 3px white;
  border-bottom: solid 3px white;
  align-items: center;
  justify-content: space-between;
  height: 62px;
  padding: 0 20px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
`;
const LogoBox = styled.div`
  display: flex;
  width:13rem;
  padding: 20px;
`;
const CategoriesBox = styled.button`
  border: 10px;
  background-color: transparent;
  color: white;
  font-size: 25px;
  cursor: pointer;
  opacity: 1;
  border-radius: 10px;
`;
const LogoName = styled.div`
  margin-left: 20px;

  font-size: calc(10px + 2vmin);
  cursor: pointer;
  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
const SearchBoxDiv = styled.div`
  display: flex;
  border-left: solid 0.8px white;
  border-right: solid 0.8px white;
  /* @media screen and (min-width: 1000px) {
  #outer_btn_right {
    display: none;
  }
}  */
`;

const SearchDiv = styled.div`

  padding: 16px 30px 12px 27px;
  font-size: 20px;
  color: #9e9e9e;
`;

const Searchinput = styled.input`
  background-color: transparent;
  width: 400px;

  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 15px;
  border-radius: 10px;
  opacity: 0.5;
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
  font-size: 17px;
  font-weight: bolder;
  cursor: pointer;
    @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
const Mode = styled.div`
  font-size: 30px;
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
    @media screen and (max-width: 480px) {
      padding : 20px;
  }
`;

const Overlay= styled.div`
    position: fixed;
  margin-top: 100px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`