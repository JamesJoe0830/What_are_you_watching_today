import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WrapBox from "../styled-components/WrapBox";
import AppBar from "../components/AppBar";
import TotalWrap from "../styled-components/TotalWrap";
import SideBar from "../components/SideBar";
import Writing from "../components/Writing";
import { BsPencil } from "react-icons/bs";
import axios from "axios";

const Notice = () => {
  const [noticeData, setNoticeData] = useState([]);
  const [isWriteOpen, setIsWriteOpen] = useState(false);
  const [Page,setPage] = useState(1);
  const MaxPage = Math.ceil(noticeData.length / 10);

  const getNoticeData = async () => {
    const APIURL = "http://localhost:3100";
    axios.get(`${APIURL}/board/posts`).then((response) => {
      setNoticeData(response.data.boardList);
    });
  };
  useEffect(() => {
    getNoticeData();
  }, []);
  const truncate = (title, n) => {
    return title?.length > n ? title.substr(0, n) + ".." : title;
  };
  const handleWrite = (e) => {
    setIsWriteOpen((isWriteOpen) => true);
  };
  if (!isWriteOpen) {
    return (
      <div>
        <TotalWrap>
          <AppBar />

          <WrapBox>
            <SideBar />
            <>
              <QuestionTitle>Q&A</QuestionTitle>
              <WritingButton
                onClick={() => {
                  handleWrite();
                }}
              >
                <WriteIcon>
                  <BsPencil />
                </WriteIcon>
                글작성
              </WritingButton>

              <NoticeContainer>
                <NoticeHead>
                  <NoticeTitle>No</NoticeTitle>
                  <NoticeTitle>제목</NoticeTitle>
                  <NoticeTitle>글쓴이</NoticeTitle>
                  <NoticeTitle>날짜</NoticeTitle>
                </NoticeHead>
                <NoticeBody>
                  {noticeData.slice(10*(Page-1),10*((Page-1)+1)).map((data) => {
                    return (
                      <div key={data.id}>
                        <DataContainer>
                        <DataNum>{data.id}</DataNum>
                        <DataTitle>{truncate(data?.title, 10)}</DataTitle>
                        </DataContainer>
                      </div>
                    );
                  })}
                </NoticeBody>
                <PageContainer>
                <PrevBtn> {"<"} </PrevBtn>
                <PageNum>
                {Array.from({ length: MaxPage }, (value, i) => (
                  <NumButton
                    onClick={() => {
                      setPage(i + 1);
                    }}
                  >
                    {i + 1}
                  </NumButton>
                ))}
                <NextBtn> {">"} </NextBtn>
              </PageNum>
            </PageContainer>
              </NoticeContainer>
            </>
          </WrapBox>
        </TotalWrap>
      </div>
    );
  } else {
    return (
      <TotalWrap>
        <AppBar />

        <WrapBox>
          <SideBar />
          <NoticeDiv>
            <Writing
              isWriteOpen={isWriteOpen}
              setIsWriteOpen={setIsWriteOpen}
            />
            {/* {!isWriteOpen && (
          <Writing/>
    )}; */}
          </NoticeDiv>
        </WrapBox>
      </TotalWrap>
    );
  }
};
const QuestionTitle = styled.h1`
  color: white;
  width: 5%;
  margin-top: 100px;
  margin-left: 45%;
  border-bottom: 2px solid #bcbbbb;
`;
const WriteIcon = styled.div``;
const WritingButton = styled.button`
  display: flex;
  width: 100px;
  height: 50px;
  font-size: 18px;
  font-weight: bolder;
  border: none;
  background: white;
  border-radius: 5px;
  place-content: center;

  margin-top: 20px;
  margin-right: 4.5%;
  align-items: center;
  float: right;
  cursor: pointer;
  &:hover {
    background: #4e4b4b;
    color: white;
  } 
`;
const NoticeDiv = styled.div`
  margin: 0 auto;
  width: 90%;
`;

const NoticeContainer = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  /* background: #3e4b43; */
  min-height: 50px;
  width: 90%;
  border-radius: 5px;
`;

const NoticeHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  padding-right:40px;
  padding-left: 40px;
  background: #3e4b43;
  border-radius: 5px;
  color: white;
`;
const NoticeBody = styled.body`

  color: white;
  background: linear-gradient(to bottom, #292929, #3b3b3c);
  border-radius: 5px;
  width: 100%;
  margin-top: 2%;
  padding: 10px 20px 20px 0px;
  /* margin: 0px 10px 0px 40px; */
`;

const NoticeTitle = styled.h3`
  font-size: 120%;
`;
const DataContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 10px 40px 40px;
padding-bottom: 20px;
border-bottom: 1px solid rgb(94, 94, 94);
`;
const DataNum = styled.div`
`;
const DataTitle = styled.div`
`;
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
  margin: 10px auto;
  /* margin-top: 20px;
  margin-bottom: 20px; */
  /* color: white;
  font-size: 20px; */
`;

const PageNum = styled.div`
  /* position: relative; */
  display: flex;
  /* width: 20px;
  height: 40px; */
`;

const NumButton = styled.div`
  margin: 0 1rem;
  background: #676060;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #207520;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
const PrevBtn = styled.button`
`;
const NextBtn = styled.button`
`;
export default Notice;
