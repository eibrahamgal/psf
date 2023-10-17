import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Features
        heading="Our Services"
        description="We believe that quality financial accounting assistance is important. We offer multiple service options. For smaller companies or startups, we offer basic financial accounting and reporting. As your business grows and becomes more successful, you can add more services when you need additional support."
      />
      <MainFeature1
        heading="Financial Statement"
        description = "A service to assist the management of a business in presenting its financial statements.
        Collection, classification, and summarization in the form of Financial Statements the information that arises from the accounting system of the company."
        description1 = "•	Balance Sheet"
        description2 = "•	Income Statement"
        description3 = "•	Cash Flows Statement"
        buttonRounded={false}
        primaryButtonText={false}
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        heading="Bookkeeping Services"
        description = "Bookkeeping service is the practice of recording and keeping track of financial transactions of your business.
        Setting up appropriate business financial accounts.
         Assignation of each transaction to the right financial account. Reconciliation of all bank and credit card accounts. General ledger adjustments. Everything ready to go, not only for tax time, but anytime you need it.
        "
        textOnLeft = {false}
        buttonRounded={false}
        primaryButtonText={false}
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        heading="Business Startups"
        description = "Registration of business in the state of Florida and EIN Number."

        buttonRounded={false}
        primaryButtonText={false}
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        heading="Payroll Services"
        description = "Simplify many things associated with timely and accurate payment, such as: Employee time and attendance. Direct deposit or check. File and pay Federal, State and Local taxes. Workers' compensation."
        textOnLeft = {false}
        buttonRounded={false}
        primaryButtonText={false}
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        heading="Sales and Use Tax Services"
        description = "Sales and use tax generally refer to the same thing: A percentage tax on the price of a sale that is collected by a merchant or consumer and remitted to the government
        We will take care of the creation and management of your account with the Florida Department of Revenue and its timely payment. "
        buttonRounded={false}
        primaryButtonText={false}
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        heading="Income Tax Preparation"
        description = "Preparation and submission of your individual and business income tax returns to the Internal Revenue Service (IRS). Individuals, Business and Self Employed. "
        textOnLeft = {false}
        buttonRounded={false}
        primaryButtonText={false}
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        heading="Public Notary"
        description = "Appointed and commissioned by the Florida Governor to administer oaths, take acknowledgments of deeds and other instruments"
        buttonRounded={false}
        primaryButtonText={false}
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />

      <Footer />
    </AnimationRevealPage>
  );
};
