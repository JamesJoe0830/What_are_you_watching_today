import React from "react";
import styled from "styled-components";
import { BiCategory } from "react-icons/bi";

export default function Categories() {
  const categories = ["영화", "드라마", "먹방"];

  return (
    <div>
      <CateButton
        onClick={(e) => {
          categories.map((props) => {
            console.log(props);
          });
        }}
      >
        <BiCategory />
      </CateButton>
    </div>
  );
}

const CateButton = styled.button`
  background-color: transparent;
  font-size: 50px;
  color: white;
  position: sticky;
  margin-top: 200px;
  margin-left: 20px;
  opacity: 1;
// 태두리 선을 제거해줍니다!
  text-align: center;
  :hover
            {
                background-color: #080808;}
  cursor: pointer;
`;
