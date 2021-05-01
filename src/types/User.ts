export type UserDataType = {
  isLoggingIn: boolean;
  isLoggingOut: boolean;
  isVerifying: boolean;
  loginError: boolean;
  logoutError: boolean;
  isAuthenticated: boolean;
  verifyingError: boolean;
  user: UserType;
};

export type UserType = {
  uid: string;
  name: string;
};
