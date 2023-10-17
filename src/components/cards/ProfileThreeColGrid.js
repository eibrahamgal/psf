import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import ImageDoctor from "../../images/pablo-moreno.png";
import ImageDoctor1 from "../../images/aranyelis-riera.png";
import ImageDoctor2 from "../../images/antonio-torres.png";
import ImageDoctor3 from "../../images/checre-maluff.png";
import ImageDoctor4 from "../../images/emilia-hernandez.png";
import ImageDoctor5 from "../../images/jendry-martinez.png";
import ImageDoctor6 from "../../images/leonor-labrador.png";
import ImageDoctor7 from "../../images/jorge-rodriguez.png";
import ImageDoctor8 from "../../images/Wilmaris-Vegas.png";
import ImageDoctor9 from "../../images/Sairis-Salom.png";




const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-48 h-48 bg-cover bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-blue-800`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-blue-800 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "Conoce nuestro equipo",
  subheading = "Our Team",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  cards = [
    {
      imageSrc: ImageDoctor,
      position: "Médico Internista",
      name: "Dr. Pablo Moreno",
      number: "0424-5911341",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: ImageDoctor1,
      position: "Ginecólogo Obstetra",
      name: "Dra. Aranyelis Riera",
      number: "0424-5462454",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: ImageDoctor2,
      position: "Gastroenterólogo y Cirujano Digestivo",
      name: "Dr. Atonio Torres",
      number: "0424-5815228",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: ImageDoctor3,
      position: "Médico Internista",
      name: "Dr. Checre Maluff",
      number: "0424-5911341",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: ImageDoctor4,
      position: "Cirujano General y Médico Estético",
      name: "Dra. Emilia Hernández",
      number: "0412-4851800",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: ImageDoctor5,
      position: "Ginecólogo Obstetra",
      name: "Dr. Yendry Martínez",
      number: "0424-5815228",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: ImageDoctor6,
      position: "Médico Neumonólogo",
      name: "Dra. Leonor Labrador",
      number: "0416-8574827",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: ImageDoctor8,
      position: "Ginecólogo Obstetra",
      name: "Dra. Wilmaris Vegas",
      number: "0414-3506984",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: ImageDoctor9,
      position: "Ginecólogo Obstetra",
      name: "Dra. Sairis Salom",
      number: "0414-5008014",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: ImageDoctor7,
      position: "Médico Neumonólogo",
      name: "Dr. Jorge Rodríguez",
      number: "0416-8574827",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {heading && <Heading>{heading}</Heading> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <span className="number">Contacto: {card.number}</span>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
