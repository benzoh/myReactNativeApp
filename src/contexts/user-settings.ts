import React from 'react';

export interface UserSettings {
  locale: string;
  theme: string;
}

export function createInitialContext() {
  return {
    locale: 'en-US',
    theme: 'light',
  };
}

export default React.createContext<UserSettings>(createInitialContext());
