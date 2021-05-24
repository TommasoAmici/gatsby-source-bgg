import parser from "fast-xml-parser";
import fetch from "node-fetch";
import {
  processLanguageDependencePoll,
  processSuggestedAgePoll,
  processSuggestedNumPlayersPoll,
} from "./polls";
import { sleep, urlParamsFromObject } from "./utils";

/**
 * Utility function to query the BGG API without repeating the base URL all the time
 * @param url endpoint of the BGG API you want to fetch
 * @returns Promise<Response>
 */
const fetchWrapper = (url: string) => fetch(`https://api.geekdo.com/xmlapi2${url}`);

export const processData = (
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
