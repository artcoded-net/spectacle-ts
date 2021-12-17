import React from "react";
import { Deck } from "spectacle";
import artcodedTheme from "./artcoded-theme";
import BaseSlide from "./templates/BaseSlide";
import SectionTitle from "./templates/SectionTitle";
import TitleSlide from "./templates/Title";

function App() {
  // prettier-ignore
  return (
    <Deck theme={artcodedTheme}>
      <TitleSlide title='Getting started with GCP' subtitle="A step by step guide for 2022" />
      <SectionTitle sectionNumber={1} sectionTitle="A New Section"/>
      <BaseSlide title="A title">An example slide</BaseSlide>
    </Deck>
  );
}
export default App;
