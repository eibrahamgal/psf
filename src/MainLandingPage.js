import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import MainFeature3 from "components/features/HomeFeature";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

export default () => (
  <AnimationRevealPage>
    <Header />
    <Hero />
    <MainFeature3 />
    <Features />
    <MainFeature2 />
    <Testimonial
      subheading="Testimonials"
      heading={
        <>
          Our Clients <span tw="text-blue-800">Love Us.</span>
        </>
      }
      description="Here are what some of our amazing customers are saying about our accounting professionals."
      testimonials={[
        {
          imageSrc:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
          quote:
            "I have been using the accounting services of GG Bokkeping and Consulting Services for over a year now and I am extremely satisfied with the level of service and expertise they provide. Their team is knowledgeable, professional, and always available to answer any questions I may have.",
          customerName: "Laura Takacs",
          customerTitle: "Vice President at Blackstone"
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
          quote:
            "Working with GG Bookkeeping and Consulting Services has been a game-changer for our business. Their team has helped us streamline our accounting processes, allowing us to focus on growing our business. They are responsive, reliable, and a pleasure to work with.",
          customerName: "Adam Cuppy",
          customerTitle: "Founder, MedicalLabs"
        }
      ]}
      textOnLeft={true}
    />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
