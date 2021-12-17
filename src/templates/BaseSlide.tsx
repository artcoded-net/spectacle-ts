import React, { PropsWithChildren } from "react";
import { Box, FlexBox, Heading, Slide, Text } from "spectacle";

interface BaseSlideProps {
  title?: string;
  hideBottomBar?: boolean;
}

const BaseSlide: React.FC<PropsWithChildren<BaseSlideProps>> = ({
  title,
  hideBottomBar,
  children,
}) => (
  <Slide backgroundColor="lightWhite" padding="0px">
    <Heading
      width="100%"
      backgroundColor="secondary"
      color="lightWhite"
      textAlign="left"
      padding="10px 20px"
      margin="0px"
    >
      {title}
    </Heading>
    <Box padding="24px">{children}</Box>
    <Box
      width="100%"
      position="absolute"
      bottom="0px"
      padding="0px"
      backgroundColor="bottomBar"
    >
      <FlexBox
        flexDirection="row"
        justifyContent="space-between"
        padding="4px 24px"
      >
        <img src="/images/artcoded-logo.png" width="120px" />
        <Text margin="0px" padding="0px" fontSize="16px" color="primary">
          artcoded.net
        </Text>
      </FlexBox>
    </Box>
  </Slide>
);

export default BaseSlide;
