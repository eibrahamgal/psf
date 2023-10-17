import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-justify text-lg leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-blue-800 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-blue-800`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-blue-800 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-blue-800 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-blue-800 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-blue-800 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc:
        "https://images.pexels.com/photos/4226205/pexels-photo-4226205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      subtitle: "Paid",
      title: "Radiografia",
      description:
        "La Policlinica San Felipe se enorgullece de ofrecer a nuestros pacientes un servicio de radiografía de alta calidad y avanzada tecnología. Nuestro compromiso es proporcionar atención médica integral y precisa, y la radiografía es una herramienta fundamental en el diagnóstico y tratamiento de diversas condiciones médicas.",
        url: "https://timerse.com"
    },

    {
      imageSrc:
        "https://dramarisolledesma.com/wp-content/uploads/2022/10/Dra_Marisol_Ledesma_Control_Prenatal_Embarazada.jpg",
      subtitle: "Free",
      title: "Control Prenatal",
      description:
        "Nuestro equipo de obstetras y ginecólogos altamente calificados trabaja en estrecha colaboración con las futuras madres para proporcionar un seguimiento prenatal integral y personalizado. Cada embarazo es único, y nuestros profesionales de la salud están aquí para brindar orientación, monitoreo y apoyo en cada paso del camino.",
      url: "https://timerse.com"
    },

    {
      imageSrc:
        "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      subtitle: "Free",
      title: "Laboratorio Policlinica San Felipe",
      description:
        "En colaboración con el Laboratorio Policlinica San Felipe, contamos con un equipo de profesionales altamente capacitados y equipamiento de vanguardia que nos permite ofrecer una amplia gama de servicios de laboratorio. Esta alianza nos permite proporcionarte resultados de alta calidad de manera eficiente y oportuna.",
      url: "https://timerse.com"
    },

    {
      imageSrc:
        "https://content-files.shure.com/BlogPosts/how-can-i-modernize-my-conference-room-equipment/images/en/how-can-i-modernize-my-conference-room-equipment_header.png",
      subtitle: "Exclusive",
      title: "Sala de Conferencias",
      description:
        "En la Policlinica San Felipe, no solo nos esforzamos por brindar atención médica de alta calidad, sino que también nos preocupamos por fomentar el aprendizaje y la colaboración en el campo de la salud. Es por eso que estamos orgullosos de ofrecer una moderna Sala de Conferencias que está a disposición de profesionales de la salud, instituciones académicas y particulares que deseen hacer uso de la misma.",
      url: "https://timerse.com"
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Servicios</HeadingTitle>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
