/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */
import React from "react";
import styled from "styled-components";
import {
  Button,
  Icon,
  colors,
  ProductGridItem,
  ProductGrid,
  GridViewOptions,
  Avatar,
} from "design-system";

const data = require("../data/data.js");

const Home = () => {
  return (
    <div>
      <StyledDiv1>
        <StyledDiv2>
          <Avatar src={data.user.avatar} />
          <Button isOutline>
            <Icon name="menu" />
          </Button>
        </StyledDiv2>
        <Styledh1>Store</Styledh1>

        <GridViewOptions />

        <ProductGrid>
          {Object.entries(data.products).map(([id, item]) => {
            return (
              <ProductGridItem
                name={item.name}
                image={item.image}
                description={item.description}
                key={id}
                size="medium"
              />
            );
          })}
        </ProductGrid>
      </StyledDiv1>
    </div>
  );
};

const StyledDiv1 = styled.div`
  padding: 64px 40px;
`;

const Styledh1 = styled.h1`
  margin-bottom: 40px;
  letter-spacing: -1.6px;
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export default Home;
