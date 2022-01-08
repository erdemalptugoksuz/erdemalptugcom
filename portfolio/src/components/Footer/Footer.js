import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
        <LinkList>
            <LinkColumn>
                <LinkTitle>İLetişim</LinkTitle>
                <LinkItem href="mailto:iletisim@erdemalptug.com">iletisim@erdemalptug.com</LinkItem>
            </LinkColumn>
            <LinkColumn>
                <LinkTitle>Telefon</LinkTitle>
                <LinkItem href="tel:1111111111">1111111111</LinkItem>
            </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
            <CompanyContainer>
                <Slogan>"Umutsuz durumlar yoktur, umutsuz insanlar vardır. Ben hiçbir zaman umudumu yitirmedim."</Slogan>
            </CompanyContainer>
            <SocialContainer>
                <SocialIcons href="https://github.com/erdemalptugoksuz">
                    <AiFillGithub size="3rem"/>
                </SocialIcons>
                <SocialIcons href="https://linkedin.com/in/erdemalptugoksuz">
                    <AiFillLinkedin size="3rem"/>
                </SocialIcons>
                <SocialIcons href="https://instagram.com/erdemalptugoksuz">
                    <AiFillInstagram size="3rem"/>
                </SocialIcons>
            </SocialContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
