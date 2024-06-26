import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import TeamIllustrationSrc from "images/team-illustration-2.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOncenter ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-center`;

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-center text-2xl sm:text-4xl lg:text-5xl text-center md:text-center leading-tight`;
const Description = tw.p`mt-4 text-center md:text-center text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mt-8 max-w-sm mx-auto md:mx-0`;
const Feature = tw.div`mt-8 flex items-start flex-col md:flex-row`;

const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-blue-800 text-center rounded-full p-2 flex-shrink-0`}
  svg {
    ${tw`w-5 h-5 text-blue-800`}
  }
`;

const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-center md:text-center`;
const FeatureHeading = tw.div`font-bold text-lg text-blue-800`;
const FeatureDescription = tw.div`mt-1 text-sm`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

export default ({
  heading = (
    <>
        Bookkeeping Services is Essential for Business Success
    </>
  ),
  description = `
  Whether you're a startup or an established business, keeping track of your financials is essential to making informed business decisions. That's when accounting and bookkeeping services comes in.
  Being a small business owner and entrepreneur is exciting, but it can also be overwhelming and confusing when it comes to the financial side of it.`,
  description2 = `
  A business owner does not have to spend the time with day-to-day paperwork, a business owner should be working ON the business not IN the business, building relationships with customers and growing the brand and company.`,
  description3 = `
  Outsourcing these tasks have been proven to save money in the long run, achieve business growth faster and keep the business from experiencing unwanted tax drama.
We offer our Accounting & Business Support service. We take on functions like bookkeeping, taxes, payroll, and accounts payable. You can have peace of mind that you will be taken care of.`,

  
  
  primaryButtonText = "",
  primaryButtonUrl = "#",
  features = null,
  textOncenter = true
}) => {
  // The textOncenter boolean prop can be used to display either the text on center or center side of the image.

  /*
   * Change the features variable as you like, add or delete objects
   * `icon` must be a React SVG component. See how BriefcaseIcon is imported above. For a full list of available icons, see Feather Icons.
   */
  const defaultFeatures = [
    {
      Icon: BriefcaseIcon,
      title: "Professionalism",
      description: "We have the best professional accounting people across the globe just to work with you."
    },
    {
      Icon: MoneyIcon,
      title: "Affordable",
      description: "Despite having the most professional accounting team, we believe that our services should be accessible and affordable to businesses of all sizes."
    }
  ];

  if (!features) features = defaultFeatures;

  return (
    <Container>

          <TextContent>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Description>{description2}</Description>
            <Description>{description3}</Description>
          </TextContent>

    </Container>
  );
};
