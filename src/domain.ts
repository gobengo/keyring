// like 'problem domain'. basically the types that describe a 'keyring' app

export type Key = {
  name: string;
};

export type User = {
  name: string;
};

export const AnonymousUser = {
  name: "Anonymous",
};
