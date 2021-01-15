import { errorMessages, ErrorMessageMessage } from "../functions/errorMessages";

type TestItem = {
  id: number;
  url: string;
  date: string;
};
type TestScenario = [string, string, TestItem[], ErrorMessageMessage];

export const scenariosToBeTested: TestScenario[] = [
  [
    "NONEMPTY_ITEMS-DUPLICATE_LINK",
    "https://www.dd.cz",
    [
      { id: 1, url: "https://www.dd.cz", date: "14. 1. 2021 17:40:45" },
      { id: 2, url: "https://www.ee.cz", date: "14. 1. 2021 17:43:57" },
    ],
    errorMessages.duplicate,
  ],
  [
    "NONEMPTY_ITEMS-GOOD_LINK",
    "https://www.ff.cz",
    [
      { id: 1, url: "https://www.dd.cz", date: "14. 1. 2021 17:40:45" },
      { id: 2, url: "https://www.ee.cz", date: "14. 1. 2021 17:43:57" },
    ],
    errorMessages.good,
  ],
  [
    "NONEMPTY_ITEMS-EMPTY_LINK",
    "",
    [
      { id: 1, url: "https://www.dd.cz", date: "14. 1. 2021 17:40:45" },
      { id: 2, url: "https://www.ee.cz", date: "14. 1. 2021 17:43:57" },
    ],
    undefined,
  ],
  [
    "NONEMPTY_ITEMS-WITHOUT_HTTPS_LINK",
    "loc",
    [
      { id: 1, url: "https://www.dd.cz", date: "14. 1. 2021 17:40:45" },
      { id: 2, url: "https://www.ee.cz", date: "14. 1. 2021 17:43:57" },
    ],
    errorMessages.missing_prefix,
  ],
  [
    "NONEMPTY_ITEMS-INVALID_LINK",
    "http://localhost:3000/",
    [
      { id: 1, url: "https://www.dd.cz", date: "14. 1. 2021 17:40:45" },
      { id: 2, url: "https://www.ee.cz", date: "14. 1. 2021 17:43:57" },
    ],
    errorMessages.invalid,
  ],
  ["EMPTY_ITEMS-GOOD_LINK", "https://www.ff.cz", [], errorMessages.good],
  ["EMPTY_ITEMS-EMPTY_LINK", "", [], undefined],
  ["EMPTY_ITEMS-WITHOUT_HTTPS_LINK", "loc", [], errorMessages.missing_prefix],
  [
    "EMPTY_ITEMS-INVALID_LINK",
    "http://localhost:3000/",
    [],
    errorMessages.invalid,
  ],
];
