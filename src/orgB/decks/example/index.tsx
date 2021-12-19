import React from "react";
import { Deck } from "spectacle";
import { customTheme } from "../../../organization.settings";
import { Title } from "../../../templates";
import deckSettings from "./deck.settings";

const MyDeck = () => (
  <Deck theme={customTheme}>
    <Title title={deckSettings.deckTitle} />
  </Deck>
);
export default MyDeck;
