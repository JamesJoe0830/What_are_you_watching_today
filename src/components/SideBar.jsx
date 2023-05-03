import React, {useState} from 'react';

import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false); //menu 초기값을 false로 설정
  const handleMenu = () => {
    setIsOpen (isOpen => !isOpen); // on off 개념
  }
    return (
      <>
      <Button onClick = {() => handleMenu()} > 카테고리</Button>
      {isOpen && ( // isOpen 이 참이라면 아래 코드 나와라 이게 핵심 
      <CateBox>
        <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members"
            onSelect={({itemId}) => {
              // maybe push to the route
            }}
            items={[
              {
                title: '드라마',
                itemId: '/ㅇㅇㅇ',
                // you can use your own custom Icon component as well
                // icon is optional
                elemBefore: () => <Icon name="inbox" />,
                 subNav: [
                  {
                    title: 'Projects',
                    itemId: '/management/projects',
                  },
                  {
                    title: 'Members',
                    itemId: '/management/members',
                  },
                ],
              },
              {
                title: '영화',
                //'Management',
                itemId: '/management',
                elemBefore: () => <Icon name="users" />,
                subNav: [
                  {
                    title: 'Products',
                    itemId: '/management/products',
                  },
                  {
                    title: 'Actions',
                    itemId: '/management/actions',
                  },
                ],
              },
              {
                title: '유투브',
                // 'Another Item',
                itemId: '/another',
                subNav: [
                  {
                    title: '먹방',
                    itemId: '/management/ㅇㅇ',
                  },
                ],
              },
            ]}
          />
          </CateBox>)}
          
      </>
    );
}

const Button = styled.button`
  font-size:20px;

  /* background-color:black; */
`;

const CateBox = styled.div`
  background-color: grey;
  color: white;
  width: 20%;
`;