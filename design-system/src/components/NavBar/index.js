import React from "react";
import styled from "styled-components";
import { node, string } from "prop-types";

/* NavBar
 *
 * A wrapper component for the app NavBar, with slots for two actions and a title.
 */
const NavBar = ({ firstAction = null, title, lastAction = null }) => {
  return (
    <StyledNavBar>
      {firstAction}
      {title && (
        <StyledTitle>
          <h4>{title}</h4>
        </StyledTitle>
      )}
      {lastAction}
    </StyledNavBar>
  );
};

NavBar.propTypes = {
  firstAction: node,
  lastAction: node,
  title: string,
};

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding-top: 24px;
`;

const StyledTitle = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

export default NavBar;
