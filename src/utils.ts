import { URLSearchParams } from "url";

/**
 * Creates URL encoded query string from an object containing parameters
 * @param params object containing query parameters
 * @returns URL encoded query string
 */
export const urlParamsFromObject = (params: ICollectionParams | IThingParams) => {
  const urlParams = new URLSearchParams();
  for (const property in params) {
    urlParams.append(property, String(params[property]));
  }
  return urlParams.toString();
};

/**
 * A simple sleep function to insert delays in code execution.
 * This is used between API calls when needed.
 * @param ms how many milliseconds you want to sleep
 */
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
