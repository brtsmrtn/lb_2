export type ErrorMessageState =
  | "duplicate"
  | "good"
  | "invalid"
  | "missing_prefix"
  | "too_long";
export type ErrorMessageMessage =
  | "This one I've got already!"
  | "That link looks good."
  | "That link still needs some sauce."
  | "Beginning with http(s):// is a must."
  | "The link is too long."
  | undefined;
export type ErrorTagState = "assigned" | "empty" | "submit" | "wrong";
export type ErrorTagMessage =
  | "Tag already assigned"
  | ""
  | "Submit with 'Enter'"
  | "Something is wrong";

type ErorrMessages = {
  [key in ErrorMessageState]: ErrorMessageMessage;
};
type ErorrTags = {
  [key in ErrorTagState]: ErrorTagMessage;
};

export const errorMessages: ErorrMessages = {
  duplicate: "This one I've got already!",
  good: "That link looks good.",
  invalid: "That link still needs some sauce.",
  missing_prefix: "Beginning with http(s):// is a must.",
  too_long: "The link is too long.",
};

export const errorTags: ErorrTags = {
  assigned: "Tag already assigned",
  empty: "",
  submit: "Submit with 'Enter'",
  wrong: "Something is wrong",
};
