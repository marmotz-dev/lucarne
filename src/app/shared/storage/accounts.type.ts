import { Tokens } from '@shared/api/tokens.type';

export type AccountsSettings = {
  version?: 1;
  currentAccountId?: string;
  accounts: Account[];
};

export type Account = {
  version?: 1;
  id: string;
  name: string;
  avatar: string;
  tokens: Tokens;
};

export const NewAccountsSettings: AccountsSettings = {
  version: 1,
  accounts: [],
};

export const NewAccount: Account = {
  version: 1,
  id: '',
  name: '',
  avatar: '',
  tokens: {
    accessToken: '',
    refreshToken: '',
  },
};
