import * as React from "react";
import { em } from "polished";
import { styled } from "../../../gatsby-theme-stitches/stitches.config";

import { Flex } from "../../Flex";
import { Space } from "../../Space";

const Wrapper = styled("div", {
  width: "100%",
  boxSizing: "border-box",
  padding: em(16),
  display: "flex",
  alignItems: "center",
  borderBottom: "1px solid $gray200",
  zIndex: 1,
  background: "white",
});
const Image = styled("img", {
  width: em(50),
  height: em(50),
  borderRadius: em(4),
  marginRight: em(20),
});
const Name = styled("div", {
  fontSize: em(14),
});
const Price = styled("div", {
  fontSize: em(14),
  fontWeight: "bold",
});

interface ItemProps {
  image: string;
  name: string;
  price: string;
}

const Item: React.FC<ItemProps> = ({ image, name, price }) => (
  <Wrapper>
    <Image src={image} />
    <Flex column ai="flex-start">
      <Name>{name}</Name>
      <Space h={4}></Space>
      <Price>{price}</Price>
    </Flex>
  </Wrapper>
);

export default Item;
