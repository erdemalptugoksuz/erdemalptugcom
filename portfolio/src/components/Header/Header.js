import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import {DiCode, DiCodeigniter, DiCssdeck} from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
      <Div1>
          <Link href="/">
              <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom:"20px"}} >
                  <DiCode size="3rem" /> <span>Erdem Alptuğ</span>
              </a>
          </Link>
      </Div1>
      <Div2>
          <li>
              <Link href="#projects">
                  <NavLink>Projelerim</NavLink>
              </Link>
          </li>
          <li>
              <Link href="#tech">
                  <NavLink>Teknolojiler</NavLink>
              </Link>
          </li>
          <li>
              <Link href="#about">
                  <NavLink>Hakkımda</NavLink>
              </Link>
          </li>
      </Div2>
      <Div3>
          <SocialIcons href="https://github.com/erdemalptugoksuz">
              <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/erdemalptugoksuz">
              <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://instagram.com/erdemalptugoksuz">
              <AiFillInstagram size="3rem"/>
          </SocialIcons>
      </Div3>
  </Container>
);

export default Header;
