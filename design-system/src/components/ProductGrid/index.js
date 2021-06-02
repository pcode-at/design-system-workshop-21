
import React from "react";
import styled from "styled-components";
import { node, number } from "prop-types";

/* ProductGrid
 *
 * A container to hold product cards
 */
const ProductGrid = ({ columns = 2, children }) => {
  return <StyledProductGrid columns={columns}>{children}</StyledProductGrid>;
};

ProductGrid.propTypes = {
  children: node,
  columns: number,
};

const StyledProductGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    `repeat(${columns}, minmax(0, 1fr))`};
  gap: 32px 24px;
`;
export default ProductGrid;
