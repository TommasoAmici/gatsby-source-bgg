import { processData } from "../index";
import {
  processLanguageDependencePoll,
  processSuggestedAgePoll,
  processSuggestedNumPlayersPoll,
} from "../polls";
import {
  collection,
  languageDependencePoll,
  suggestedAgePoll,
  suggestedNumPlayersPoll,
  thing,
} from "./fixtures";

test("processData returns an empty list if empty input", () => {
  expect(processData([])).toStrictEqual([]);
});

test("processData merges a collection item and details about the item", () => {
  expect(processData([{ collection: collection, thing: thing }])).toStrictEqual([
    {
      objectID: 123,
      objectType: "boardgame",
      subType: "boardgame",
      collID: 1,
      description:
        "In many ways 7 Wonders Duel resembles its parent game 7 Wonders as over three ages players acquire cards that provide resources or advance their military or scientific development in order to develop a civilization and complete wonders.&#10;&#10;What's different about 7 Wonders Duel is that, as the title suggests, the game is solely for two players, with the players not drafting cards simultaneously from hands of cards, but from a display of face-down and face-up cards arranged at the start of a round. A player can take a card only if it's not covered by any others, so timing comes into play as well as bonus moves that allow you to take a second card immediately. As in the original game, each card that you acquire can be built, discarded for coins, or used to construct a wonder.&#10;&#10;Each player starts with four wonder cards, and the construction of a wonder provides its owner with a special ability. Only seven wonders can be built, though, so one player will end up short.&#10;&#10;Players can purchase resources at any time from the bank, or they can gain cards during the game that provide them with resources for future building; as you acquire resources, the cost for those particular resources increases for your opponent, representing your dominance in this area.&#10;&#10;A player can win 7 Wonders Duel in one of three ways: each time you acquire a military card, you advance the military marker toward your opponent's capital, giving you a bonus at certain positions; if you reach the opponent's capital, you win the game immediately; similarly, if you acquire any six of seven different scientific symbols, you achieve scientific dominance and win immediately; if none of these situations occurs, then the player with the most points at the end of the game wins.&#10;&#10;",
      minPlayers: 2,
      maxPlayers: 2,
      playingTime: 30,
      minPlayTime: 30,
      maxPlayTime: 30,
      minAge: 10,
      links: [
        {
          type: "boardgamecategory",
          id: 1050,
          value: "Ancient",
        },
        {
          type: "boardgamecategory",
          id: 1002,
          value: "Card Game",
        },
        {
          type: "boardgamefamily",
          id: 70360,
          value: "Digital Implementations: Board Game Arena",
        },
      ],
      name: "7 Wonders Duel",
      yearPublished: 2015,
      image:
        "https://cf.geekdo-images.com/WzNs1mA_o22ZWTR8fkLP2g__imagepage/img/G8mf2eXt4iRho5TL2N5207oQ5lI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3376065.jpg",
      status: {
        own: true,
        prevOwned: false,
        forTrade: false,
        want: false,
        wantToPlay: false,
        wantToBuy: false,
        wishlist: false,
        preOrdered: false,
        lastModified: new Date(2020, 11, 25, 13, 49, 34),
      },
      numPlays: 5,
      suggestedNumPlayers: processSuggestedNumPlayersPoll(suggestedNumPlayersPoll),
      suggestedPlayerAge: processSuggestedAgePoll(suggestedAgePoll),
      languageDependence: processLanguageDependencePoll(languageDependencePoll),
    },
  ]);
});
