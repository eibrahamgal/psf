import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage";
import Servicios from "components/features/VerticalWithAlternateImageAndText";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Card from "components/cards/ProfileThreeColGrid.js";
import Footer from "components/footers/MiniCenteredFooter.js";

export default () => (
  <><AnimationRevealPage>
    <Hero />
  </AnimationRevealPage>

  <div id="servicios">
    <Servicios />
  </div><div id="equipo">
    <Card />
  </div><div id="contactanos">
    <ContactUsForm />
  </div><Footer /></>
  
);
