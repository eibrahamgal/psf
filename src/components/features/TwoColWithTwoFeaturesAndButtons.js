import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import TeamIllustrationSrc from "images/team.jpg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mt-8 max-w-sm mx-auto md:mx-0`;
const Feature = tw.div`mt-8 flex items-start flex-col md:flex-row`;

const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-blue-800 text-center rounded-full p-2 flex-shrink-0`}
  svg {
    ${tw`w-5 h-5 text-blue-800`}
  }
`;

const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-center md:text-left`;
const FeatureHeading = tw.div`font-bold text-lg text-blue-800`;
const FeatureDescription = tw.div`mt-1 text-sm`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

export default ({
  subheading = "Our Expertise",
  heading = (
    <>
      We have the most <span tw="text-blue-800">professional</span> accounting team.
    </>
  ),
  description = "At our company, we take great pride in our accounting team, which is composed of some of the most skilled and experienced professionals in the industry. Our team members are dedicated to providing our clients with accurate and reliable financial information, and they are committed to staying up-to-date with the latest accounting practices and regulations. When you work with us, you can rest assured that you are working with the most professional accounting team around.",
  primaryButtonText = "",
  primaryButtonUrl = "#",
  features = null,
  textOnLeft = true
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

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
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={TeamIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Features>
              {features.map((feature, index) => (
                <Feature key={index}>
                  <FeatureIconContainer>{<feature.Icon />}</FeatureIconContainer>
                  <FeatureText>
                    <FeatureHeading>{feature.title}</FeatureHeading>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  </FeatureText>
                </Feature>
              ))}
            </Features>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
