export type Account = {
  version: 1;
  id: string;
  name: string;
  accessToken?: string;
  refreshToken?: string;
};

export type Accounts = {
  version: 1;
  lastUsedAccountId?: string;
  accounts: Account[];
};

export const NewAccounts: Accounts = {
  version: 1,
  accounts: [],
};
