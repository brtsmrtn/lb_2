import urlsToBeTested from "./urlsToBeTested.json";
import { isLinkValid } from "../functions/isLinkValid";

test("all URLs in urlsToBeTested.json pass through isLinkValid function", () => {
  expect(urlsToBeTested.map((item) => isLinkValid(item.input))).toEqual(
    urlsToBeTested.map((item) => item.state)
  );
});
