import React, { useState } from "react";
import styled from "styled-components";
import Divider from "../Divider";
import Button from "../Button";
import Select from "../Select";
import { string } from "prop-types";
/* CheckoutSummary
 *
 * TODO: add component description
 */

const AddressInput = ({ label, text }) => {
  const [isDisabled, setDisabled] = useState(true);
  return (
    <>
      <StyledTitleContainer>
        <StyledTitle>
          <label htmlFor="addressInput">{label}</label>
        </StyledTitle>
        <Button isBorderless onClick={() => setDisabled(false)}>
          Change
        </Button>
      </StyledTitleContainer>
      <StyledTextarea
        rows="3"
        disabled={isDisabled}
        id="addressInput"
        name="textValue"
        onBlur={() => setDisabled(true)}
        defaultValue={text}
      />
    </>
  );
};

AddressInput.propTypes = {
  label: string,
  text: string,
};

const CheckoutSummary = ({
  name,
  address,
  deliveryOptions,
  deliveryPrice,
  totalAmount,
}) => {
  return (
    <>
      <AddressInput label="Address" text={address} />
      <Divider className="margin-bottom-3xl margin-top-sm" />
      <StyledTitle>Delivery</StyledTitle>
      <p>{name}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Select options={deliveryOptions} />
        <p>€{deliveryPrice}</p>
      </div>
      <Divider className="margin-bottom-3xl" />
      <StyledTitle className="margin-bottom-3xl" size="small">
        <span>Total</span>
        <span>€{totalAmount}</span>
      </StyledTitle>
    </>
  );
};

const StyledTitle = styled.h2`
  margin-bottom: 16px;
  letter-spacing: -0.8px;
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  font-family: "DM Sans";
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.3px;
  color: rgba(12, 17, 24, 1);
`;

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export default CheckoutSummary;
