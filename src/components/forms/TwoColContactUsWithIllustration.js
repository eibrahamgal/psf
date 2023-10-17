import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/contacto.jpg";
import { ReactComponent as WhatsAppIcon } from "../../images/whatsapp.svg";
import { ReactComponent as MailIcon } from "../../images/mail.svg";


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
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mb-12 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center text-justify md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 text-justify`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col lg:flex-row`
const Input = tw.input`border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-blue-800`

const SubmitButton = tw(PrimaryButtonBase)`inline-block lg:ml-6 mt-6 lg:mt-0`

export default ({
  subheading = "Contáctanos",
  heading = <><span tw="text-blue-800">Contáctanos</span><wbr/></>,
  description = "Puede ponerse en contacto con nosotros a través del teléfono o correo electrónico. Responderemos a su consulta lo antes posible y le proporcionaremos una solución personalizada que se adapte a sus necesidades específicas. Estamos comprometidos en ofrecer un servicio excepcional a nuestros pacientes, y estamos listos para ayudarlo a resolver cualquier problema o duda que tenga sobre nuestros servicios. ¡Esperamos escuchar de usted pronto!",
  description2 = "0424-5457643",
  description4 = "policlinicasanfelipe@gmail.com",
  whatsappLink = "https://wa.me/+5804245457643", 
  submitButtonText = "",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  return (
    <Container style={{ marginBottom: '-36px' }}>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{heading}</Heading>
            <Description style={{ textAlign: 'justify' }}>{description}</Description>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '12px' }}>
            <WhatsAppIcon /><a href={whatsappLink}><Description style={{ marginLeft: '8px',marginBottom: '18px' }}>{description2}</Description></a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '4px' }}>
              <MailIcon /><Description style={{ marginLeft: '8px', marginBottom: '20px' }}>{description4}</Description>
            </div>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
