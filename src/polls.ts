export const processSuggestedAgePoll = (poll: IPollPlayerAge | undefined): TSuggestedAgePoll => {
  const emptyObj: TSuggestedAgePoll = {
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
  };
  if (poll === undefined) return emptyObj;

  poll.results.result.forEach(r => {
    if (r.value === "21 and up") {
      emptyObj[21] = r.numvotes;
    } else if (typeof r.value === "number") {
      emptyObj[r.value] = r.numvotes;
    }
  });
  return emptyObj;
};

const suggestedNumPlayersLabelMap: {
  [key: string]: "best" | "recommended" | "notRecommended";
} = {
  best: "best",
  recommended: "recommended",
  "not recommended": "notRecommended",
};

export const processSuggestedNumPlayersPoll = (poll: IPollNumPlayers | undefined) => {
  return poll?.results.map(r => {
    const obj = { numPlayers: String(r.numplayers), best: 0, recommended: 0, notRecommended: 0 };
    r.result.forEach(
      l => (obj[suggestedNumPlayersLabelMap[l.value.toString().toLowerCase()]] = l.numvotes)
    );
    return obj;
  });
};

const languageDependenceLabelMap: { [key: string]: 1 | 2 | 3 | 4 | 5 } = {
  "No necessary in-game text": 1,
  "Some necessary text - easily memorized or small crib sheet": 2,
  "Moderate in-game text - needs crib sheet or paste ups": 3,
  "Extensive use of text - massive conversion needed to be playable": 4,
  "Unplayable in another language": 5,
};

export const initLanguageDependencePoll: TLanguageDependencePoll = {
  1: { helpText: "No necessary in-game text", votes: 0 },
  2: { helpText: "Some necessary text - easily memorized or small crib sheet", votes: 0 },
  3: { helpText: "Moderate in-game text - needs crib sheet or paste ups", votes: 0 },
  4: {
    helpText: "Extensive use of text - massive conversion needed to be playable",
    votes: 0,
  },
  5: { helpText: "Unplayable in another language", votes: 0 },
};

export const processLanguageDependencePoll = (
  poll: IPollLanguageDependence | undefined
): TLanguageDependencePoll => {
  const obj = initLanguageDependencePoll;
  poll?.results.result.map(r => {
    obj[languageDependenceLabelMap[r.value]].votes = r.numvotes;
  });
  return obj;
};
