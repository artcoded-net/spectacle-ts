import React from "react";
import { Box, FlexBox, Heading, Slide, Text } from "spectacle";
import artcodedTheme from "../artcoded-theme";

interface SectionTitleSlideInputs {
  sectionNumber?: number;
  sectionTitle: string;
}

const TitleSlide: React.FC<SectionTitleSlideInputs> = ({
  sectionNumber,
  sectionTitle,
}) => (
  <Slide backgroundColor="lightWhite">
    <FlexBox flexDirection="column" justifyContent="center" height="100%">
      {sectionNumber && (
        <>
          <Text
            textAlign="center"
            margin="0px"
            padding="0px"
          >{`PART ${sectionNumber}`}</Text>
          <div
            style={{
              margin: "20px",
              height: "4px",
              width: "120px",
              backgroundColor: artcodedTheme.colors.primary,
              borderRadius: "20px",
            }}
          />
        </>
      )}
      <Heading margin="2px" padding="2px">
        {sectionTitle}
      </Heading>
    </FlexBox>
  </Slide>
);

export default TitleSlide;
