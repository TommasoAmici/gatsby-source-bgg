import {
  initLanguageDependencePoll,
  processLanguageDependencePoll,
  processSuggestedAgePoll,
  processSuggestedNumPlayersPoll,
} from "../polls";
import {
  languageDependencePollFixture,
  suggestedAgePollFixture,
  suggestedNumPlayersPollFixture,
} from "./fixtures.test";

test("processSuggestedAgePoll returns 0s if poll is undefined", () => {
  expect(processSuggestedAgePoll(undefined)).toStrictEqual({
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    8: 0,
    10: 0,
    12: 0,
    14: 0,
    16: 0,
    18: 0,
    21: 0,
  });
});

test("processSuggestedAgePoll maps answers correctly and returns TSuggestedAgePoll", () => {
  expect(processSuggestedAgePoll(suggestedAgePollFixture)).toStrictEqual({
    2: 0,
    3: 0,
    4: 0,
    5: 1,
    6: 2,
    8: 64,
    10: 110,
    12: 52,
    14: 6,
    16: 1,
    18: 0,
    21: 0,
  });
});

test("processSuggestedNumPlayersPoll returns undefined if poll is undefined", () => {
  expect(processSuggestedNumPlayersPoll(undefined)).toBe(undefined);
});

test("processSuggestedNumPlayersPoll returns correct map (not case sensitive)", () => {
  expect(processSuggestedNumPlayersPoll(suggestedNumPlayersPollFixture)).toStrictEqual([
    { numPlayers: "1", best: 7, recommended: 42, notRecommended: 603 },
    { numPlayers: "2", best: 789, recommended: 22, notRecommended: 3 },
    { numPlayers: "2+", best: 5, recommended: 4, notRecommended: 623 },
  ]);
});

test("processLanguageDependencePoll to return empty map if input is undefined", () => {
  expect(processLanguageDependencePoll(undefined)).toStrictEqual(initLanguageDependencePoll);
});

test("processLanguageDependencePoll to map inputs correctly", () => {
  expect(processLanguageDependencePoll(languageDependencePollFixture)).toStrictEqual({
    1: { helpText: "No necessary in-game text", votes: 73 },
    2: { helpText: "Some necessary text - easily memorized or small crib sheet", votes: 8 },
    3: { helpText: "Moderate in-game text - needs crib sheet or paste ups", votes: 0 },
    4: {
      helpText: "Extensive use of text - massive conversion needed to be playable",
      votes: 0,
    },
    5: { helpText: "Unplayable in another language", votes: 0 },
  });
});
