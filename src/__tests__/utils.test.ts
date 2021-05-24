import { sleep, urlParamsFromObject } from "../utils";

test("urlParamsFromObject to return a URL encoded string", () => {
  expect(
    urlParamsFromObject({
      username: "tommasoamici",
      own: 1,
      stats: 1,
    })
  ).toBe("username=tommasoamici&own=1&stats=1");
});

test("sleep sets a delay in the program", async () => {
  const currentTime = new Date().getTime();
  await sleep(500);
  const timeAfterSleep = new Date().getTime();
  expect(timeAfterSleep - currentTime).toBeGreaterThanOrEqual(500);
});
