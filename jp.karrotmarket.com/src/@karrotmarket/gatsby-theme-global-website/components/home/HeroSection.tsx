import React from "react";
import { rem } from "polished";
import { getImage } from "gatsby-plugin-image";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

import { Flex } from "@karrotmarket/gatsby-theme-global-website/src/components/Flex";
import { Space } from "@karrotmarket/gatsby-theme-global-website/src/components/Space";
import AppLink from "@karrotmarket/gatsby-theme-global-website/src/components/AppLink";
import Image from "@karrotmarket/gatsby-theme-global-website/src/components/Image";

type HeroSectionProps = {
  content: GatsbyTypes.HeroSection_contentFragment;
  links: GatsbyTypes.DownloadSection_linksFragment;
};

const Section = styled("section", {
  // height: "582px",

  height: "auto",
  width: "100%",
  position: "relative",
  "@md": {
    paddingTop: rem(70),
    paddingBottom: rem(80),
  },
});

const Container = styled("div", {
  height: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
  textAlign: "left",
  padding: rem(24),
  paddingTop: rem(70),
  paddingBottom: rem(40),
  boxSizing: "border-box",

  "@sm": {
    width: rem(540),
  },
  "@md": {
    padding: 0,
    flexDirection: "row",
    textAlign: "left",
    justifyContent: "initial",
    alignItems: "center",
    width: rem(720),
  },
  "@lg": {
    width: rem(960),
  },
  "@xl": {
    width: rem(1140),
  },
});

const Title = styled("h2", {
  marginBottom: rem(24),
  whiteSpace: "nowrap",
  "*": {
    fontFamily: "$noto",
    fontSize: "$heading3",
    lineHeight: "120%",

    "@lg": {
      lineHeight: "115%",
      fontSize: "$heading1",
    },
  },
});

const Text = styled("div", {
  marginBottom: rem(24),
  // marginRight: rem(70),
  "*": {
    color: "#4D5159",
    letterSpacing: "-0.055em",
    fontFamily: "$noto",
    fontSize: "$subtitle2",

    "@md": {
      marginRight: rem(40),
    },
    "@lg": {
      fontSize: "$subtitle1",
    },
    "@xl": {
      marginRight: rem(60),
    },
  },
});

const TextContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flex: 1,
  "@md": {
    maxWidth: "50%",
  },
});

const HeroSection: React.FC<HeroSectionProps> = ({ content, links }) => {
  if (!content.primary || !links) return <></>;
  const { title, text, background_color, side_image } = content.primary;

  const sideImage = getImage(
    side_image?.localFile?.childImageSharp?.gatsbyImageData as any
  );

  return (
    <Section css={{ background: background_color }}>
      <Container>
        <TextContainer>
          <Title dangerouslySetInnerHTML={{ __html: title.html }}></Title>
          <Text dangerouslySetInnerHTML={{ __html: text.html }}></Text>
          <AppLink
            theme="white"
            type="desktop"
            links={links}
            inverted
          ></AppLink>
        </TextContainer>

        <Flex ai="center" flex={1}>
          <Image image={sideImage} alt={side_image?.alt}></Image>
        </Flex>
      </Container>
    </Section>
  );
};

export default HeroSection;