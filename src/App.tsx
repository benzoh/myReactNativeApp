import React from 'react';
import * as UiContext from './contexts/ui';
import Routes from './routes';

import Home from './components/Home';
import UserSettingContext, { createInitialContext } from './contexts/user-settings';
import { loadUserSettings } from '../lib';

export default function App() {
  const [userSettings, setUserSettings] = React.useState(createInitialContext());
  const [applicationState, setApplicationState] = React.useState(UiContext.createApplicationInitialState());

  React.useEffect(() => {
    async function load() {
      const userSettings = await loadUserSettings();
      setUserSettings(JSON.parse(userSettings));
    }
    load();
  });

  return (
    <UserSettingContext.Provider value={userSettings}>
      <Home />
    </UserSettingContext.Provider>
    // <UiContext.Context.Provider value={{ applicationState, setApplicationState }}>
    //   <Routes />
    // </UiContext.Context.Provider>
  );
}
