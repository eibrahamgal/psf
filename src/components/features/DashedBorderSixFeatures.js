import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/bookkeeping.png";
import ShieldIconImage from "../../images/puesta-en-marcha.png";
import CustomizeIconImage from "../../images/report.png";
import FastIconImage from "../../images/calendar.png";
import ReliableIconImage from "../../images/tax.png";
import SimpleIconImage from "../../images/bookkeeping2.png";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-blue-800 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-blue-800 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-blue-800`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    { imageSrc: ShieldIconImage, title: "Business Startups",
      description: "Registration of business in the state of Florida and EIN Number."},
    { imageSrc: SupportIconImage, title: "Bookkeeping Services",
      description: "Bookkeeping service is the practice of recording and keeping track of financial transactions of your business." },
    { imageSrc: CustomizeIconImage, title: "Financial Statement ",
      description: "A service to assist the management of a business in presenting its financial statements." },
    { imageSrc: FastIconImage, title: "Payroll Services",
      description: "Simplify many things associated with timely and accurate payment, such as: Employee time and attendance. Direct deposit or check. File and pay Federal, State and Local taxes. Workers' compensation." },
    { imageSrc: ReliableIconImage, title: "Sales and Use Tax Services",
      description: "We will take care of the creation and management of your account with the Florida Department of Revenue and its timely payment. " },
    { imageSrc: SimpleIconImage, title: "Income Tax Preparation",
      description: "Preparation and submission of your individual and business income tax returns to the Internal Revenue Service (IRS). Individuals, Business and Self Employed." }
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Our Professional <span tw="text-blue-800">Services</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
