import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './components/RootStack';
import { ToastModule } from './components/layout/common/ToastModule';

function App() {
  return (
    <>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      <ToastModule />
    </>
  );
}

export default App;
