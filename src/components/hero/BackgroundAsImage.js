import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import HeaderBase, { NavLinks, NavLink, PrimaryLink } from "components/headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import Image from "../../images/home.jpg";

const Header = tw(HeaderBase)`max-w-none mb-10`;

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url(${Image});
  height: 82.5vh;
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-4xl mt-8 text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
  font-size: 7rem; /* Tamaño de fuente para pantallas pequeñas */
  span {
    font-size: 5.5rem; /* Tamaño de fuente para el fondo inclinado en pantallas pequeñas */
  }

  @media (max-width: 640px) {
    font-size: 3rem; /* Tamaño de fuente para pantallas pequeñas */
    span {
      font-size: 3rem; /* Tamaño de fuente para el fondo inclinado en pantallas pequeñas */
    }
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
  color: #00b284; /* Cambiar el color del texto */
`;

const Notification = tw.span`inline-block my-4 mt-8 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-lg`;

const PrimaryAction = tw.button`px-8 py-3 mt-12 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-gray-400 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#servicios">
        Servicios
      </NavLink>
      <NavLink href="#equipo">
        Equipo
      </NavLink>
    </NavLinks>
  ];

  return (
    <>
      <Header links={navLinks} />
      <Container>
        <OpacityOverlay />
        <HeroContainer>
          <TwoColumn>
            <LeftColumn>
              <Notification >Calidad y Confianza a tu disposición</Notification>
              <Heading>
                <span >Policlínica</span>
                <br />
                <SlantedBackground >San Felipe</SlantedBackground>
              </Heading>
              <NavLink href="#contactanos"><PrimaryAction style={{ color: '#00b284' }} >Contactanos</PrimaryAction></NavLink>
            </LeftColumn>
          </TwoColumn>
        </HeroContainer>
      </Container>
    </>
  );
};
