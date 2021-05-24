import {
  initLanguageDependencePoll,
  processLanguageDependencePoll,
  processSuggestedAgePoll,
  processSuggestedNumPlayersPoll,
} from "../polls";
import { languageDependencePoll, suggestedAgePoll, suggestedNumPlayersPoll } from "./fixtures.test";

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
  expect(processSuggestedAgePoll(suggestedAgePoll)).toStrictEqual({
    2: 2,
    3: 3,
    4: 0,
    5: 0,
    6: 0,
    8: 0,
    10: 10,
    12: 0,
    14: 0,
    16: 0,
    18: 0,
    21: 21,
  });
});

test("processSuggestedNumPlayersPoll returns undefined if poll is undefined", () => {
  expect(processSuggestedNumPlayersPoll(undefined)).toBe(undefined);
});

test("processSuggestedNumPlayersPoll returns correct map (not case sensitive)", () => {
  expect(processSuggestedNumPlayersPoll(suggestedNumPlayersPoll)).toStrictEqual([
    { numPlayers: "2", best: 1, recommended: 2, notRecommended: 3 },
    { numPlayers: "2+", best: 4, recommended: 5, notRecommended: 6 },
  ]);
});

test("processLanguageDependencePoll to return empty map if input is undefined", () => {
  expect(processLanguageDependencePoll(undefined)).toStrictEqual(initLanguageDependencePoll);
});

test("processLanguageDependencePoll to map inputs correctly", () => {
  expect(processLanguageDependencePoll(languageDependencePoll)).toStrictEqual({
    1: { helpText: "No necessary in-game text", votes: 3 },
    2: { helpText: "Some necessary text - easily memorized or small crib sheet", votes: 5 },
    3: { helpText: "Moderate in-game text - needs crib sheet or paste ups", votes: 7 },
    4: {
      helpText: "Extensive use of text - massive conversion needed to be playable",
      votes: 10,
    },
    5: { helpText: "Unplayable in another language", votes: 13 },
  });
});
