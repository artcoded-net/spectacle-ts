import React from "react";
import { Deck } from "spectacle";
import orgSettings from "../../organization.settings";
import { Title } from "../../../templates";
import deckSettings from "./deck.settings";

const MyDeck = () => (
  <Deck theme={orgSettings.theme}>
    <Title title={deckSettings.deckTitle} organizationSettings={orgSettings} />
  </Deck>
);
export default MyDeck;
