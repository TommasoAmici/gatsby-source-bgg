export const suggestedAgePoll: IPollPlayerAge = {
  title: "Suggested Player Age",
  totalvotes: 1,
  name: "suggested_playerage",
  results: {
    result: [
      { value: 2, numvotes: 2 },
      { value: 3, numvotes: 3 },
      { value: 10, numvotes: 10 },
      { value: "21 and up", numvotes: 21 },
    ],
  },
};

export const suggestedNumPlayersPoll: IPollNumPlayers = {
  title: "Suggested number of players",
  totalvotes: 1,
  name: "suggested_numplayers",
  results: [
    {
      numplayers: 2,
      result: [
        { value: "Best", numvotes: 1 },
        { value: "Recommended", numvotes: 2 },
        { value: "Not Recommended", numvotes: 3 },
      ],
    },
    {
      numplayers: "2+",
      result: [
        { value: "Best", numvotes: 4 },
        { value: "Recommended", numvotes: 5 },
        { value: "Not recommended", numvotes: 6 },
      ],
    },
  ],
};

export const languageDependencePoll: IPollLanguageDependence = {
  title: "Language dependence",
  name: "language_dependence",
  totalvotes: 1,
  results: {
    result: [
      { level: 1, value: "No necessary in-game text", numvotes: 3 },
      {
        level: 2,
        value: "Some necessary text - easily memorized or small crib sheet",
        numvotes: 5,
      },
      { level: 3, value: "Moderate in-game text - needs crib sheet or paste ups", numvotes: 7 },
      {
        level: 4,
        value: "Extensive use of text - massive conversion needed to be playable",
        numvotes: 10,
      },
      { level: 5, value: "Unplayable in another language", numvotes: 13 },
    ],
  },
};

export const collection: IAPICollection = {
  objecttype: "boardgame",
  objectid: 123,
  subtype: "boardgame",
  collid: 1,
  name: { text: "7 Wonders Duel", sortindex: "1" },
  yearpublished: 2015,
  image:
    "https://cf.geekdo-images.com/WzNs1mA_o22ZWTR8fkLP2g__imagepage/img/G8mf2eXt4iRho5TL2N5207oQ5lI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3376065.jpg",
  thumbnail:
    "https://cf.geekdo-images.com/WzNs1mA_o22ZWTR8fkLP2g__itemrep/img/sDjIG76VOwrlySbj_5rdnAaWO_0=/fit-in/246x300/filters:strip_icc()/pic3376065.jpg",
  status: {
    own: 1,
    prevowned: 0,
    fortrade: 0,
    want: 0,
    wanttoplay: 0,
    wanttobuy: 0,
    wishlist: 0,
    preordered: 0,
    lastmodified: "2020-12-25 13:49:34",
  },
  numplays: 5,
};

export const thing: IAPIThing = {
  type: "boardgame",
  id: 173346,
  thumbnail:
    "https://cf.geekdo-images.com/WzNs1mA_o22ZWTR8fkLP2g__itemrep/img/sDjIG76VOwrlySbj_5rdnAaWO_0=/fit-in/246x300/filters:strip_icc()/pic3376065.jpg",
  image:
    "https://cf.geekdo-images.com/WzNs1mA_o22ZWTR8fkLP2g__imagepage/img/G8mf2eXt4iRho5TL2N5207oQ5lI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3376065.jpg",
  name: [
    { type: "primary", sortindex: 1, value: "7 Wonders Duel" },
    { type: "primary", sortindex: 1, value: "7 Csoda Párbaj" },
  ],
  description:
    "In many ways 7 Wonders Duel resembles its parent game 7 Wonders as over three ages players acquire cards that provide resources or advance their military or scientific development in order to develop a civilization and complete wonders.&#10;&#10;What's different about 7 Wonders Duel is that, as the title suggests, the game is solely for two players, with the players not drafting cards simultaneously from hands of cards, but from a display of face-down and face-up cards arranged at the start of a round. A player can take a card only if it's not covered by any others, so timing comes into play as well as bonus moves that allow you to take a second card immediately. As in the original game, each card that you acquire can be built, discarded for coins, or used to construct a wonder.&#10;&#10;Each player starts with four wonder cards, and the construction of a wonder provides its owner with a special ability. Only seven wonders can be built, though, so one player will end up short.&#10;&#10;Players can purchase resources at any time from the bank, or they can gain cards during the game that provide them with resources for future building; as you acquire resources, the cost for those particular resources increases for your opponent, representing your dominance in this area.&#10;&#10;A player can win 7 Wonders Duel in one of three ways: each time you acquire a military card, you advance the military marker toward your opponent's capital, giving you a bonus at certain positions; if you reach the opponent's capital, you win the game immediately; similarly, if you acquire any six of seven different scientific symbols, you achieve scientific dominance and win immediately; if none of these situations occurs, then the player with the most points at the end of the game wins.&#10;&#10;",
  yearpublished: { value: 2015 },
  minplayers: { value: 2 },
  maxplayers: { value: 2 },
  poll: [suggestedAgePoll, languageDependencePoll, suggestedNumPlayersPoll],
  playingtime: { value: 30 },
  minplaytime: { value: 30 },
  maxplaytime: { value: 30 },
  minage: { value: 10 },
  link: [
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
};

test("empty test for file containing fixtures", () => {
  expect(1).toBe(1);
});
