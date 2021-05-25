import fetch from "node-fetch";
import { mocked } from "ts-jest/utils";
import { fetchCollection, processData } from "../index";
import {
  collectionAPIFixture,
  collectionBody,
  collectionBodyOneItem,
  processedCollection,
  thingAPIFixture,
  thingBody,
  thingBodyOneItem,
} from "./fixtures.test";

jest.mock("node-fetch");
const mockedFetch = mocked(fetch, true);

afterEach(() => {
  mockedFetch.mockReset();
});

test("processData returns an empty list if empty input", () => {
  expect(processData([])).toStrictEqual([]);
});

test("processData merges a collection item and details about the item", () => {
  expect(processData([{ collection: collectionAPIFixture, thing: thingAPIFixture }])).toStrictEqual(
    [processedCollection]
  );
});

test("fetchCollection returns a processed collection from the API", async () => {
  mockedFetch
    .mockReturnValueOnce(
      Promise.resolve({ text: () => "We're preparing your data", status: 202 } as any)
    )
    .mockReturnValueOnce({ text: () => collectionBody, status: 200 } as any)
    .mockReturnValueOnce(Promise.resolve({ text: () => thingBody, status: 200 } as any));

  const collection = await fetchCollection({ username: "tommasoamici" });
  expect(fetch).toHaveBeenCalledTimes(3);
  expect(collection).toStrictEqual([processedCollection, processedCollection]);
});

test("fetchCollection returns a processed collection from the API if only one item is present", async () => {
  mockedFetch
    .mockReturnValueOnce({ text: () => collectionBodyOneItem, status: 200 } as any)
    .mockReturnValueOnce(Promise.resolve({ text: () => thingBodyOneItem, status: 200 } as any));

  const collection = await fetchCollection({ username: "tommasoamici" });
  expect(fetch).toHaveBeenCalledTimes(2);
  expect(collection).toStrictEqual([processedCollection]);
});

test("fetchCollection throws error if no response from server", async () => {
  mockedFetch.mockReturnValueOnce(Promise.resolve({ text: () => "Not found", status: 404 } as any));

  await expect(fetchCollection({ username: "tommasoamici" })).rejects.toThrow();
});

test("fetchThings throws error if no response from server", async () => {
  mockedFetch
    .mockReturnValueOnce({ text: () => collectionBodyOneItem, status: 200 } as any)
    .mockReturnValueOnce(Promise.resolve({ text: () => "Not found", status: 404 } as any));

  await expect(fetchCollection({ username: "tommasoamici" })).rejects.toThrow();
});
