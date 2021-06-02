import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel";
import card from "./card.svg";
import cardBlue from "./cardBlue.svg";
import cardPink from "./cardPink.svg";

/* CheckoutPaymentMethod
 *
 * TODO: add component description
 */
const CheckoutPaymentMethod = (props) => {
  return (
    <>
      <StyledTitle size="small">Payment Method</StyledTitle>
      <Carousel
        images={[{ source: card }, { source: cardBlue }, { source: cardPink }]}
      />
    </>
  );
};

const StyledTitle = styled.h2`
  margin-bottom: 16px;
  letter-spacing: -0.8px;
  display: inline-flex;
  justify-content: space-between;
`;

export default CheckoutPaymentMethod;
