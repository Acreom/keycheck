export interface AppParams {
  id: string;
  name: string;
  icon: string;
  homepage: string;
  shortcuts: Record<string, string>;
  globals: Record<string, string>;
  description: string;
}

export interface AppDisplay {
  icon: string;
  name: string;
}

export interface Result {
  description: string;
  keys: string;
  id: string;
  redirect: string;
  app?: AppDisplay;
  global?: boolean;
  partial?: boolean;
}
