export type UserData = {
  isLoggingIn: boolean;
  isLoggingOut: boolean;
  isVerifying: boolean;
  loginError: boolean;
  logoutError: boolean;
  isAuthenticated: boolean;
  verifyingError: boolean;
  user: User;
};

export type User = {
  uid: string;
  name: string;
};
