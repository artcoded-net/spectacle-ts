import React from "react";
import { Box, FlexBox, Heading, Slide, Text } from "spectacle";
import artcodedTheme from "../artcoded-theme";

interface TitleSlideInputs {
  title: string;
  subtitle?: string;
}

const TitleSlide: React.FC<TitleSlideInputs> = ({ title, subtitle }) => (
  <Slide backgroundColor="secondary">
    <FlexBox flexDirection="column" justifyContent="center" height="100%">
      <Heading margin="2px" padding="2px" color="lightWhite">
        {title}
      </Heading>
      <div
        style={{
          marginTop: "20px",
          height: "4px",
          width: "120px",
          backgroundColor: artcodedTheme.colors.lightWhite,
          borderRadius: "20px",
        }}
      />
      <Text textAlign="center">{subtitle}</Text>
    </FlexBox>
    <FlexBox alignItems="center">
      <img src="/images/artcoded-logo-light.png" width="120px" />
    </FlexBox>
  </Slide>
);

export default TitleSlide;
