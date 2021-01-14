import { errorMessages } from "../functions/errorMessages";
export const scenariosToBeTested = [
  {
    title: "NONEMPTY_ITEMS-DUPLICATE_LINK",
    url: "https://www.dd.cz",
    items: [
      { id: 1, url: "https://www.dd.cz", date: "14. 1. 2021 17:40:45" },
      { id: 2, url: "https://www.ee.cz", date: "14. 1. 2021 17:43:57" },
    ],
    expected: errorMessages.find((t) => t.state == "duplicate")!.message,
  },
  {
    title: "NONEMPTY_ITEMS-GOOD_LINK",
    url: "https://www.ff.cz",
    items: [
      { id: 1, url: "https://www.dd.cz", date: "14. 1. 2021 17:40:45" },
      { id: 2, url: "https://www.ee.cz", date: "14. 1. 2021 17:43:57" },
    ],
    expected: errorMessages.find((t) => t.state == "good")!.message,
  },
  {
    title: "NONEMPTY_ITEMS-EMPTY_LINK",
    url: "",
    items: [
      { id: 1, url: "https://www.dd.cz", date: "14. 1. 2021 17:40:45" },
      { id: 2, url: "https://www.ee.cz", date: "14. 1. 2021 17:43:57" },
    ],
    expected: undefined,
  },
  {
    title: "NONEMPTY_ITEMS-WITHOUT_HTTPS_LINK",
    url: "loc",
    items: [
      { id: 1, url: "https://www.dd.cz", date: "14. 1. 2021 17:40:45" },
      { id: 2, url: "https://www.ee.cz", date: "14. 1. 2021 17:43:57" },
    ],
    expected: errorMessages.find((t) => t.state == "missing_prefix")!.message,
  },
  {
    title: "NONEMPTY_ITEMS-INVALID_LINK",
    url: "http://localhost:3000/",
    items: [
      { id: 1, url: "https://www.dd.cz", date: "14. 1. 2021 17:40:45" },
      { id: 2, url: "https://www.ee.cz", date: "14. 1. 2021 17:43:57" },
    ],
    expected: errorMessages.find((t) => t.state == "invalid")!.message,
  },
  {
    title: "EMPTY_ITEMS-GOOD_LINK",
    url: "https://www.ff.cz",
    items: [],
    expected: errorMessages.find((t) => t.state == "good")!.message,
  },
  {
    title: "EMPTY_ITEMS-EMPTY_LINK",
    url: "",
    items: [],
    expected: undefined,
  },
  {
    title: "EMPTY_ITEMS-WITHOUT_HTTPS_LINK",
    url: "loc",
    items: [],
    expected: errorMessages.find((t) => t.state == "missing_prefix")!.message,
  },
  {
    title: "EMPTY_ITEMS-INVALID_LINK",
    url: "http://localhost:3000/",
    items: [],
    expected: errorMessages.find((t) => t.state == "invalid")!.message,
  },
];
