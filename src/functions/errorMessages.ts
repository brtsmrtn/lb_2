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

type ErorrMessages = {
  [key in ErrorMessageState]: ErrorMessageMessage;
};

export const errorMessages: ErorrMessages = {
  duplicate: "This one I've got already!",
  good: "That link looks good.",
  invalid: "That link still needs some sauce.",
  missing_prefix: "Beginning with http(s):// is a must.",
  too_long: "The link is too long.",
};
