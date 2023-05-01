import React from 'react';
import styled from "styled-components";
import WrapBox from '../styled-components/WrapBox';
import AppBar from '../components/AppBar';
import Categories from '../components/Categories';


export default function Notice() {
    return (
        <div>
            <WrapBox>
            <AppBar/>
            즐겨찾기 페이지입니다.
            <Categories/>
            </WrapBox>
        </div>
    );
}

