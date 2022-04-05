import React from 'react';
import { BsPeopleFill, BsImages, BsInboxesFill } from "react-icons/bs";

export const NavbarList = [
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