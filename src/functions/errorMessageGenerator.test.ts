import { scenariosToBeTested } from "./scenariosToBeTested";
import { errorMessageGenerator } from "./errorMessageGenerator";

test.each(scenariosToBeTested)(
  "scenario %s should go through",
  (_, url, items, error) => {
    expect(errorMessageGenerator(url, items)).toBe(error);
  }
);
