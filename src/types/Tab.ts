export type FirebaseTab = {
  title: string;
  url: string;
  predefined: boolean;
  color: string;
};

export type Tab = {
  id: string;
} & FirebaseTab;
