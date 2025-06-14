// App.js

import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { AppProvider } from './context/AppContext'; // ✅ make sure this path is correct

export default function App() {
  console.log("App is running");
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}
