/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootStack } from 'src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { theme } from 'src/theme';
import { Provider } from 'react-redux';
import { CreateStore } from 'src/rtk';
import { PersistGate } from 'redux-persist/integration/react';
import i18n from './translations';

i18n.then(() => {});

const { reduxStore, persistor } = CreateStore();
function App(): React.JSX.Element {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <SafeAreaProvider>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </SafeAreaProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
