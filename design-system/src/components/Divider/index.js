import React from "react";
import styled from "styled-components";

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
  background-color: rgba(12, 17, 24, 1);
  opacity: 0.1;
`;

export default Divider;
