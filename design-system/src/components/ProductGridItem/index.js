import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Icon from "../Icon";
import { bool, string, oneOf } from "prop-types";
import { colors, typography as t, spacing } from "tokens";

/* ProductGridItem
 *
 * ProductGridItem component displays product image, name and price
 */

export const ProductGridItem = ({
  as,
  size = "medium",
  image,
  name,
  description,
  price,
  ...props
}) => {
  return (
    <StyledProductGridItem as={as} size={size} {...props}>
      {size === "big" && (
        <StyledButton isOutline>
          <Icon name="heart" />
        </StyledButton>
      )}
      <StyledProductGridItemImage src={image} alt={name} size={size} />
      <StyledProductGridItemInfo size={size}>
        {size !== "medium" && (
          <StyledProductGridItemDescription size={size}>
            {description}
          </StyledProductGridItemDescription>
        )}
        <StyledMainInfoWrapper size={size}>
          <StyledProductGridItemName size={size}>
            {name}
          </StyledProductGridItemName>
          <StyledProductGridItemPrice size={size}>
            {price}
          </StyledProductGridItemPrice>
        </StyledMainInfoWrapper>
      </StyledProductGridItemInfo>
    </StyledProductGridItem>
  );
};

ProductGridItem.propTypes = {
  size: oneOf(["small", "medium", "big"]),
  image: string,
  name: string,
  price: string,
  description: string,
};

const StyledProductGridItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-decoration: none;
  color: inherit;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  ${({ size }) =>
    size === "small" &&
    `height: 100px; 
    flex-direction: row;`}
  ${({ size }) =>
    size === "big" && `margin-bottom: ${spacing.spacing40Bottom};`}
`;

const StyledProductGridItemImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-bottom: ${({ size }) =>
    size === "big" ? "24px" : size === "small" ? "0px" : "16px"};
  display: block;
  border-radius: 32px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  margin: 24px;
`;

const StyledProductGridItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  ${({ size }) =>
    size == "small" &&
    `
     flex-grow: 1;
     margin-left: 16px;
     align-content: flex-start;
     max-width: 60%;`}
`;

const StyledProductGridItemDescription = styled.p`
  margin-bottom: 8px;
  opacity: 0.6;
  ${({ size }) => size === "small" && `order: 5;`}
`;

const StyledMainInfoWrapper = styled.div`
  ${({ size }) =>
    size === "small" &&
    `display: inline-flex; 
    flex-wrap: nowrap; 
    flex-direction: row;`}
`;

const StyledProductGridItemName = styled.h2`
  ${({ size }) => {
    if (size === "big") {
      return `
        font-family: ${t.headline1FontFamily};
        font-size: ${t.headline1FontSize};
        line-height: ${t.headline1LineHeight};
        font-weight: ${t.headline1FontWeight};
        font-style: ${t.headline1FontStyle};
        letter-spacing: ${t.headline1LetterSpacing};`;
    } else if (size === "medium") {
      return `
        font-family: ${t.headline4FontFamily};
        font-size: ${t.headline4FontSize};
        line-height: ${t.headline4LineHeight};
        font-weight: ${t.headline4FontWeight};
        font-style: ${t.headline4FontStyle};
        letter-spacing: ${t.headline4LetterSpacing};
        margin-bottom: 8px;
    `;
    } else {
      return `
        font-family: ${t.headline6FontFamily};
        font-size: ${t.headline6FontSize};
        line-height: ${t.headline6LineHeight};
        font-weight: ${t.headline6FontWeight};
        font-style: ${t.headline6FontStyle};
        letter-spacing: ${t.headline6LetterSpacing};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding-right: ${spacing.spacing12Bottom};
    `;
    }
  }}
`;

const StyledProductGridItemPrice = styled.p`
  color: ${colors.primary500};
  margin-top: 8px;
  font-weight: 500;
  ${({ size }) => {
    if (size === "big") {
      return `
        font-family: ${t.headline2FontFamily};
        font-size: ${t.headline2FontSize};
        line-height: ${t.headline2LineHeight};
        font-weight: ${t.headline2FontWeight};
        font-style: ${t.headline2FontStyle};
        letter-spacing: ${t.headline1LetterSpacing};
        color: ${colors.primary500};
        margin-top: 16px;`;
    } else if (size === "small") {
      return `
        color: ${colors.onBackground500}; 
        margin-top: 0; 
        margin-left: auto; 
        font-weight: bold;`;
    }
  }}
`;

export default ProductGridItem;
