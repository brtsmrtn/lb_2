import {
  urlsToBeTested,
  longLink,
  longButOkayEnoughLink,
} from "./urlsToBeTested";
import { isLinkValid } from "../functions/isLinkValid";
import isURL from "validator/lib/isURL";
import { maxLinkLength } from "../utils/constants";

test.each(urlsToBeTested)("link %s should be valid = %p", (input, state) => {
  expect(isLinkValid(input)).toBe(state);
});
test(`isURL function doesnt accept ${maxLinkLength} characters`, () =>
  expect(isURL(longLink)).toBe(false));

test(`isURL function accepts ${maxLinkLength - 1} characters`, () =>
  expect(isURL(longButOkayEnoughLink)).toBe(true));
