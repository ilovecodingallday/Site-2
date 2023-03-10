import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 3,
    url: '/info',
    text: 'info',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/michaelcurtismcnulty/',
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: 'https://github.com/ilovecodingallday',
    icon: <FaGithub />,
  },
];
