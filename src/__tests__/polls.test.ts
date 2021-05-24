import {
  initLanguageDependencePoll,
  processLanguageDependencePoll,
  processSuggestedAgePoll,
  processSuggestedNumPlayersPoll,
} from "../polls";

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
  expect(
    processSuggestedAgePoll({
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
    })
  ).toStrictEqual({
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
  expect(
    processSuggestedNumPlayersPoll({
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
    })
  ).toStrictEqual([
    { numPlayers: "2", best: 1, recommended: 2, notRecommended: 3 },
    { numPlayers: "2+", best: 4, recommended: 5, notRecommended: 6 },
  ]);
});

test("processLanguageDependencePoll to return empty map if input is undefined", () => {
  expect(processLanguageDependencePoll(undefined)).toStrictEqual(initLanguageDependencePoll);
});

test("processLanguageDependencePoll to map inputs correctly", () => {
  expect(
    processLanguageDependencePoll({
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
    })
  ).toStrictEqual({
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
