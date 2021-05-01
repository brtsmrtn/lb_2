export type FirebaseTabType = {
  title: string;
  predefined: boolean;
  color: string;
};

export type TabType = {
  id: string;
} & FirebaseTabType;
