import { scenariosToBeTested } from "./scenariosToBeTested";
import { errorMessageGenerator } from "../functions/errorMessageGenerator";

test("all scenarios lead to right error messages", () => {
  expect(
    scenariosToBeTested.map((item) =>
      errorMessageGenerator(item.url, item.items)
    )
  ).toEqual(scenariosToBeTested.map((item) => item.expected));
});
