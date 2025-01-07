import { AtpSessionData } from '@atproto/api';

export type AccountsSettings = {
  version: 1;
  currentAccountId?: string;
  accounts: Account[];
};

export type Account = {
  version: 1;
  did: string;
  name: string;
  avatar?: string;
  session?: AtpSessionData;
};

export const NewAccountsSettings: AccountsSettings = {
  version: 1,
  accounts: [],
};

export const NewAccount: Pick<Account, 'version'> = {
  version: 1,
};
