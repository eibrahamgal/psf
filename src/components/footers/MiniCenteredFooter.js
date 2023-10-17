import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/logo.png";
import { ReactComponent as InstagramIcon } from "../../images/Instagram.svg";


const Container = tw(ContainerBase)` text-gray-800 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const Row = tw.div`flex items-center justify-center flex-col px-8`
const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-24`;


const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-12 h-10`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-800`
export default () => {
  return (
    <Container style={{backgroundColor: '#00b284 '}}>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
          </LogoContainer>
          <SocialLinksContainer>
            <SocialLink href="https://instagram.com/policlinica_sanfelipe?igshid=MzRlODBiNWFlZA==">
              <InstagramIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2023, Policlinica San Felipe, C.A. Todos los derechos reservados.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
