import {
  processLanguageDependencePoll,
  processSuggestedAgePoll,
  processSuggestedNumPlayersPoll,
} from "../polls";

export const suggestedAgePollFixture: IPollPlayerAge = {
  title: "Suggested Player Age",
  totalvotes: 236,
  name: "suggested_playerage",
  results: {
    result: [
      { value: 2, numvotes: 0 },
      { value: 3, numvotes: 0 },
      { value: 4, numvotes: 0 },
      { value: 5, numvotes: 1 },
      { value: 6, numvotes: 2 },
      { value: 8, numvotes: 64 },
      { value: 10, numvotes: 110 },
      { value: 12, numvotes: 52 },
      { value: 14, numvotes: 6 },
      { value: 16, numvotes: 1 },
      { value: 18, numvotes: 0 },
      { value: "21 and up", numvotes: 0 },
    ],
  },
};

export const suggestedNumPlayersPollFixture: IPollNumPlayers = {
  title: "User Suggested Number of Players",
  totalvotes: 821,
  name: "suggested_numplayers",
  results: [
    {
      numplayers: 1,
      result: [
        { value: "Best", numvotes: 7 },
        { value: "Recommended", numvotes: 42 },
        { value: "Not Recommended", numvotes: 603 },
      ],
    },
    {
      numplayers: 2,
      result: [
        { value: "Best", numvotes: 789 },
        { value: "Recommended", numvotes: 22 },
        { value: "Not Recommended", numvotes: 3 },
      ],
    },
    {
      numplayers: "2+",
      result: [
        { value: "Best", numvotes: 5 },
        { value: "Recommended", numvotes: 4 },
        { value: "Not recommended", numvotes: 623 },
      ],
    },
  ],
};

export const languageDependencePollFixture: IPollLanguageDependence = {
  title: "Language dependence",
  name: "language_dependence",
  totalvotes: 73,
  results: {
    result: [
      { level: 1, value: "No necessary in-game text", numvotes: 73 },
      {
        level: 2,
        value: "Some necessary text - easily memorized or small crib sheet",
        numvotes: 8,
      },
      { level: 3, value: "Moderate in-game text - needs crib sheet or paste ups", numvotes: 0 },
      {
        level: 4,
        value: "Extensive use of text - massive conversion needed to be playable",
        numvotes: 0,
      },
      { level: 5, value: "Unplayable in another language", numvotes: 0 },
    ],
  },
};

export const collectionAPIFixture: IAPICollection = {
  objecttype: "thing",
  objectid: 173346,
  subtype: "boardgame",
  collid: 77534876,
  name: { text: "7 Wonders Duel", sortindex: "1" },
  yearpublished: 2015,
  image:
    "https://cf.geekdo-images.com/WzNs1mA_o22ZWTR8fkLP2g__original/img/q_TrwF4VnXgW1dFQgtMJexSXOEA=/0x0/filters:format(jpeg)/pic3376065.jpg",
  thumbnail:
    "https://cf.geekdo-images.com/WzNs1mA_o22ZWTR8fkLP2g__thumb/img/qGf8-LJx4lsNOgpjS6iCs2TyKts=/fit-in/200x150/filters:strip_icc()/pic3376065.jpg",
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

export const thingAPIFixture: IAPIThing = {
  type: "boardgame",
  id: 173346,
  thumbnail:
    "https://cf.geekdo-images.com/WzNs1mA_o22ZWTR8fkLP2g__thumb/img/qGf8-LJx4lsNOgpjS6iCs2TyKts=/fit-in/200x150/filters:strip_icc()/pic3376065.jpg",
  image:
    "https://cf.geekdo-images.com/WzNs1mA_o22ZWTR8fkLP2g__original/img/q_TrwF4VnXgW1dFQgtMJexSXOEA=/0x0/filters:format(jpeg)/pic3376065.jpg",
  name: [
    { type: "primary", sortindex: 1, value: "7 Wonders Duel" },
    { type: "primary", sortindex: 1, value: "7 Csoda Párbaj" },
  ],
  description:
    "In many ways 7 Wonders Duel resembles its parent game 7 Wonders as over three ages players acquire cards that provide resources or advance their military or scientific development in order to develop a civilization and complete wonders.&amp;#10;&amp;#10;What's different about 7 Wonders Duel is that, as the title suggests, the game is solely for two players, with the players not drafting cards simultaneously from hands of cards, but from a display of face-down and face-up cards arranged at the start of a round. A player can take a card only if it's not covered by any others, so timing comes into play as well as bonus moves that allow you to take a second card immediately. As in the original game, each card that you acquire can be built, discarded for coins, or used to construct a wonder.&amp;#10;&amp;#10;Each player starts with four wonder cards, and the construction of a wonder provides its owner with a special ability. Only seven wonders can be built, though, so one player will end up short.&amp;#10;&amp;#10;Players can purchase resources at any time from the bank, or they can gain cards during the game that provide them with resources for future building; as you acquire resources, the cost for those particular resources increases for your opponent, representing your dominance in this area.&amp;#10;&amp;#10;A player can win 7 Wonders Duel in one of three ways: each time you acquire a military card, you advance the military marker toward your opponent's capital, giving you a bonus at certain positions; if you reach the opponent's capital, you win the game immediately; similarly, if you acquire any six of seven different scientific symbols, you achieve scientific dominance and win immediately; if none of these situations occurs, then the player with the most points at the end of the game wins.&amp;#10;&amp;#10;",
  yearpublished: { value: 2015 },
  minplayers: { value: 2 },
  maxplayers: { value: 2 },
  poll: [suggestedAgePollFixture, languageDependencePollFixture, suggestedNumPlayersPollFixture],
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

export const processedCollection = {
  objectID: 173346,
  objectType: "thing",
  subType: "boardgame",
  collID: 77534876,
  description: `In many ways 7 Wonders Duel resembles its parent game 7 Wonders as over three ages players acquire cards that provide resources or advance their military or scientific development in order to develop a civilization and complete wonders.

What's different about 7 Wonders Duel is that, as the title suggests, the game is solely for two players, with the players not drafting cards simultaneously from hands of cards, but from a display of face-down and face-up cards arranged at the start of a round. A player can take a card only if it's not covered by any others, so timing comes into play as well as bonus moves that allow you to take a second card immediately. As in the original game, each card that you acquire can be built, discarded for coins, or used to construct a wonder.

Each player starts with four wonder cards, and the construction of a wonder provides its owner with a special ability. Only seven wonders can be built, though, so one player will end up short.

Players can purchase resources at any time from the bank, or they can gain cards during the game that provide them with resources for future building; as you acquire resources, the cost for those particular resources increases for your opponent, representing your dominance in this area.

A player can win 7 Wonders Duel in one of three ways: each time you acquire a military card, you advance the military marker toward your opponent's capital, giving you a bonus at certain positions; if you reach the opponent's capital, you win the game immediately; similarly, if you acquire any six of seven different scientific symbols, you achieve scientific dominance and win immediately; if none of these situations occurs, then the player with the most points at the end of the game wins.

`,
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
    "https://cf.geekdo-images.com/WzNs1mA_o22ZWTR8fkLP2g__original/img/q_TrwF4VnXgW1dFQgtMJexSXOEA=/0x0/filters:format(jpeg)/pic3376065.jpg",
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
  suggestedNumPlayers: processSuggestedNumPlayersPoll(suggestedNumPlayersPollFixture),
  suggestedPlayerAge: processSuggestedAgePoll(suggestedAgePollFixture),
  languageDependence: processLanguageDependencePoll(languageDependencePollFixture),
};

const xmlCollection = `
<item objecttype="thing" objectid="173346" subtype="boardgame" collid="77534876">
  <name sortindex="1">7 Wonders Duel</name>
  <yearpublished>2015</yearpublished>
  <image>https://cf.geekdo-images.com/WzNs1mA_o22ZWTR8fkLP2g__original/img/q_TrwF4VnXgW1dFQgtMJexSXOEA=/0x0/filters:format(jpeg)/pic3376065.jpg</image>
  <thumbnail>https://cf.geekdo-images.com/WzNs1mA_o22ZWTR8fkLP2g__thumb/img/qGf8-LJx4lsNOgpjS6iCs2TyKts=/fit-in/200x150/filters:strip_icc()/pic3376065.jpg</thumbnail>
  <status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0" preordered="0" lastmodified="2020-12-25 13:49:34" />
  <numplays>5</numplays>
</item>`;

export const collectionBody = `
            <?xml version="1.0" encoding="UTF-8"?>
            <items totalitems="2" termsofuse="https://boardgamegeek.com/xmlapi/termsofuse" pubdate="Fri, 21 May 2021 11:05:08 +0000">
              ${xmlCollection}
              ${xmlCollection}
            </items>`;

const xmlItem = `<item type="boardgame" id="173346">
<thumbnail>https://cf.geekdo-images.com/WzNs1mA_o22ZWTR8fkLP2g__thumb/img/qGf8-LJx4lsNOgpjS6iCs2TyKts=/fit-in/200x150/filters:strip_icc()/pic3376065.jpg</thumbnail>
<image>https://cf.geekdo-images.com/WzNs1mA_o22ZWTR8fkLP2g__original/img/q_TrwF4VnXgW1dFQgtMJexSXOEA=/0x0/filters:format(jpeg)/pic3376065.jpg</image>
<name type="primary" sortindex="1" value="7 Wonders Duel" />
<name type="alternate" sortindex="1" value="7 Csoda Párbaj" />
<description>In many ways 7 Wonders Duel resembles its parent game 7 Wonders as over three ages players acquire cards that provide resources or advance their military or scientific development in order to develop a civilization and complete wonders.&amp;#10;&amp;#10;What's different about 7 Wonders Duel is that, as the title suggests, the game is solely for two players, with the players not drafting cards simultaneously from hands of cards, but from a display of face-down and face-up cards arranged at the start of a round. A player can take a card only if it's not covered by any others, so timing comes into play as well as bonus moves that allow you to take a second card immediately. As in the original game, each card that you acquire can be built, discarded for coins, or used to construct a wonder.&amp;#10;&amp;#10;Each player starts with four wonder cards, and the construction of a wonder provides its owner with a special ability. Only seven wonders can be built, though, so one player will end up short.&amp;#10;&amp;#10;Players can purchase resources at any time from the bank, or they can gain cards during the game that provide them with resources for future building; as you acquire resources, the cost for those particular resources increases for your opponent, representing your dominance in this area.&amp;#10;&amp;#10;A player can win 7 Wonders Duel in one of three ways: each time you acquire a military card, you advance the military marker toward your opponent's capital, giving you a bonus at certain positions; if you reach the opponent's capital, you win the game immediately; similarly, if you acquire any six of seven different scientific symbols, you achieve scientific dominance and win immediately; if none of these situations occurs, then the player with the most points at the end of the game wins.&amp;#10;&amp;#10;</description>
<yearpublished value="2015" />
<minplayers value="2" />
<maxplayers value="2" />
<poll name="suggested_numplayers" title="User Suggested Number of Players" totalvotes="821">
   <results numplayers="1">
      <result value="Best" numvotes="7" />
      <result value="Recommended" numvotes="42" />
      <result value="Not Recommended" numvotes="603" />
   </results>
   <results numplayers="2">
      <result value="Best" numvotes="789" />
      <result value="Recommended" numvotes="22" />
      <result value="Not Recommended" numvotes="3" />
   </results>
   <results numplayers="2+">
      <result value="Best" numvotes="5" />
      <result value="Recommended" numvotes="4" />
      <result value="Not Recommended" numvotes="623" />
   </results>
</poll>
<playingtime value="30" />
<minplaytime value="30" />
<maxplaytime value="30" />
<minage value="10" />
<poll name="suggested_playerage" title="User Suggested Player Age" totalvotes="236">
   <results>
      <result value="2" numvotes="0" />
      <result value="3" numvotes="0" />
      <result value="4" numvotes="0" />
      <result value="5" numvotes="1" />
      <result value="6" numvotes="2" />
      <result value="8" numvotes="64" />
      <result value="10" numvotes="110" />
      <result value="12" numvotes="52" />
      <result value="14" numvotes="6" />
      <result value="16" numvotes="1" />
      <result value="18" numvotes="0" />
      <result value="21 and up" numvotes="0" />
   </results>
</poll>
<poll name="language_dependence" title="Language Dependence" totalvotes="81">
   <results>
      <result level="1" value="No necessary in-game text" numvotes="73" />
      <result level="2" value="Some necessary text - easily memorized or small crib sheet" numvotes="8" />
      <result level="3" value="Moderate in-game text - needs crib sheet or paste ups" numvotes="0" />
      <result level="4" value="Extensive use of text - massive conversion needed to be playable" numvotes="0" />
      <result level="5" value="Unplayable in another language" numvotes="0" />
   </results>
</poll>
<link type="boardgamecategory" id="1050" value="Ancient" />
<link type="boardgamecategory" id="1002" value="Card Game" />
<link type="boardgamefamily" id="70360" value="Digital Implementations: Board Game Arena" />
</item>`;

export const thingBody = `
  <?xml version="1.0" encoding="UTF-8"?>
  <items termsofuse="https://boardgamegeek.com/xmlapi/termsofuse">
     ${xmlItem}
     ${xmlItem}
  </items>
  `;

export const collectionBodyOneItem = `
  <?xml version="1.0" encoding="UTF-8"?>
  <items totalitems="1" termsofuse="https://boardgamegeek.com/xmlapi/termsofuse" pubdate="Fri, 21 May 2021 11:05:08 +0000">
    ${xmlCollection}
  </items>`;

export const thingBodyOneItem = `
<?xml version="1.0" encoding="UTF-8"?>
<items termsofuse="https://boardgamegeek.com/xmlapi/termsofuse">
  ${xmlItem}
</items>
`;

test("empty test for file containing fixtures", () => {
  expect(1).toBe(1);
});
