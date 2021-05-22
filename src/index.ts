import parser from "fast-xml-parser";
import fetch from "node-fetch";
import { URLSearchParams } from "url";

/**
 * Utility function to query the BGG API without repeating the base URL all the time
 * @param url endpoint of the BGG API you want to fetch
 * @returns Promise<Response>
 */
const fetchWrapper = (url: string) => fetch(`https://api.geekdo.com/xmlapi2${url}`);

/**
 * A simple sleep function to insert delays in code execution.
 * This is used between API calls when needed.
 * @param ms how many milliseconds you want to sleep
 */
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const processSuggestedAgePoll = (poll: IPollPlayerAge | undefined): TSuggestedAgePoll => {
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
  Best: "best",
  Recommended: "recommended",
  "Not Recommended": "notRecommended",
};

const processSuggestedNumPlayersPoll = (poll: IPollNumPlayers | undefined) => {
  return poll?.results.map(r => {
    const obj = { numPlayers: String(r.numplayers), best: 0, recommended: 0, notRecommended: 0 };
    r.result.forEach(l => (obj[suggestedNumPlayersLabelMap[l.value]] = l.numvotes));
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

const processLanguageDependencePoll = (
  poll: IPollLanguageDependence | undefined
): TLanguageDependencePoll => {
  const obj: TLanguageDependencePoll = {
    1: { helpText: "No necessary in-game text", votes: 0 },
    2: { helpText: "Some necessary text - easily memorized or small crib sheet", votes: 0 },
    3: { helpText: "Moderate in-game text - needs crib sheet or paste ups", votes: 0 },
    4: {
      helpText: "Extensive use of text - massive conversion needed to be playable",
      votes: 0,
    },
    5: { helpText: "Unplayable in another language", votes: 0 },
  };
  poll?.results.result.map(r => {
    obj[languageDependenceLabelMap[r.value]].votes = r.numvotes;
  });
  return obj;
};

const processData = (
  data: { collection: IAPICollection; thing: IAPIThing | undefined }[]
): ICollection[] => {
  return data.map(d => {
    const suggestedNumPlayersPoll = d.thing?.poll.find(f => f.name === "suggested_numplayers") as
      | IPollNumPlayers
      | undefined;
    const suggestedAgePoll = d.thing?.poll.find(f => f.name === "suggested_playerage") as
      | IPollPlayerAge
      | undefined;
    const languageDependencePoll = d.thing?.poll.find(f => f.name === "language_dependence") as
      | IPollLanguageDependence
      | undefined;
    return {
      objectID: d.collection.objectid,
      objectType: d.collection.objecttype,
      subType: d.collection.subtype,
      collID: d.collection.collid,
      description: d.thing?.description,
      minPlayers: d.thing?.minplayers.value,
      maxPlayers: d.thing?.maxplayers.value,
      playingTime: d.thing?.playingtime.value,
      minPlayTime: d.thing?.minplaytime.value,
      maxPlayTime: d.thing?.maxplaytime.value,
      minAge: d.thing?.minage.value,
      links: d.thing?.link,
      name: d.collection.name.text,
      yearPublished: d.collection.yearpublished,
      image: d.collection.image,
      status: {
        own: d.collection.status.own === 1,
        prevOwned: d.collection.status.prevowned === 1,
        forTrade: d.collection.status.fortrade === 1,
        want: d.collection.status.want === 1,
        wantToPlay: d.collection.status.wanttoplay === 1,
        wantToBuy: d.collection.status.wanttobuy === 1,
        wishlist: d.collection.status.wishlist === 1,
        preOrdered: d.collection.status.preordered === 1,
        lastModified: new Date(d.collection.status.lastmodified),
      },
      numPlays: d.collection.numplays,
      suggestedNumPlayers: processSuggestedNumPlayersPoll(suggestedNumPlayersPoll),
      suggestedPlayerAge: processSuggestedAgePoll(suggestedAgePoll),
      languageDependence: processLanguageDependencePoll(languageDependencePoll),
    };
  });
};

/**
 * Creates URL encoded query string from object containing parameters
 * @param params object containing query parameters
 * @returns URL encoded query string
 */
const urlParamsFromObject = (params: ICollectionParams | IThingParams) => {
  const urlParams = new URLSearchParams();
  for (const property in params) {
    urlParams.append(property, String(params[property]));
  }
  return urlParams.toString();
};

const fetchThings = async (
  collections: IAPICollection[]
): Promise<{ collection: IAPICollection; thing: IAPIThing | undefined }[]> => {
  const params: IThingParams = {
    id: collections.map(t => t.objectid),
    videos: 0,
    page: 1,
  };
  const response = await fetchWrapper(`/thing?${urlParamsFromObject(params)}`);
  if (response.status !== 200) {
    throw `Failed to retrieve information for things ${params.id}`;
  }
  const text = await response.text();
  const parsedResponse: { termsofuse: string; items: { item: IAPIThing[] } } = parser.parse(text, {
    ignoreAttributes: false,
    attributeNamePrefix: "",
    textNodeName: "text",
    parseAttributeValue: true,
  });
  return collections.map(c => {
    return { collection: c, thing: parsedResponse.items.item.find(f => f.id === c.objectid) };
  });
};

/**
 * Function to query the BGG API for a given user collection
 * @param params query parameters for retrieving a collection
 * @returns a list of "things" from BGG
 */
export const fetchCollection = async (params: ICollectionParams): Promise<ICollection[]> => {
  const response = await fetchWrapper(`/collection?${urlParamsFromObject(params)}`);

  /*
   * 202 indicates BGG has queued your request and you need to keep retrying
   * (hopefully w/some delay between tries) until the status is not 202
   */
  if (response.status === 202) {
    await sleep(500);
    return fetchCollection(params);
  } else if (response.status === 200) {
    const text = await response.text();
    const parsedResponse: { termsofuse: string; items: { item: IAPICollection[] } } = parser.parse(
      text,
      {
        ignoreAttributes: false,
        attributeNamePrefix: "",
        textNodeName: "text",
        parseAttributeValue: true,
      }
    );
    const collectionsAndThings = await fetchThings(parsedResponse.items.item);
    return processData(collectionsAndThings);
  } else {
    throw `Failed to retrieve game collection for ${params.username}`;
  }
};
