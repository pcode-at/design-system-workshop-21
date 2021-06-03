import React from "react";
import styled from "styled-components";
import { colors } from "../../tokens";

/* Divider
 *
 * A line to separate content
 */
const Divider = (props) => {
  return <StyledDivider {...props} />;
};

export const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.gray800};
  opacity: 0.1;
`;

export default Divider;
