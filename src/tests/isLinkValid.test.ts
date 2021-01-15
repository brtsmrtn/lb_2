import { urlsToBeTested } from "./urlsToBeTested";
import { isLinkValid } from "../functions/isLinkValid";

test.each(urlsToBeTested)("link %s should be valid = %p", (input, state) => {
  expect(isLinkValid(input)).toBe(state);
});
