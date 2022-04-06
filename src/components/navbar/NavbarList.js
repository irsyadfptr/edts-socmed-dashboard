import React from 'react';
import { BsPeopleFill, BsImages, BsInboxesFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";


export const NavbarList = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'User',
    path: '/user',
    icon: <BsPeopleFill />,
    cName: 'nav-text'
  },
  {
    title: 'Post',
    path: '/post',
    icon: <BsInboxesFill />,
    cName: 'nav-text'
  },
  {
    title: 'Album',
    path: '/album',
    icon: <BsImages />,
    cName: 'nav-text'
  },
];