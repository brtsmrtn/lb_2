export type errorMessage = {
  state: string;
  message: string;
};
export const errorMessages: errorMessage[] = [
  { state: "duplicate", message: "This one I've got already!" },
  { state: "good", message: "That link looks good." },
  { state: "invalid", message: "That link still needs some sauce." },
  { state: "missing_prefix", message: "Beginning with http(s):// is a must." },
];
