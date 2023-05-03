import React from 'react';
import styled from "styled-components";
import WrapBox from '../styled-components/WrapBox';
import AppBar from '../components/AppBar';
import TotalWrap from '../styled-components/TotalWrap';

export default function Notice() {
    return (
        <div>
            <TotalWrap>
            <AppBar/>

            <WrapBox>
            즐겨찾기 페이지입니다.

            </WrapBox>
            </TotalWrap>
        </div>
    );
}

