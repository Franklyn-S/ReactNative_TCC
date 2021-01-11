import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './components/Tabs';
import { createStackNavigator } from '@react-navigation/stack';
import RunScreen from './screens/RunScreen';
import GraphicScreen from './screens/GraphicScreen';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Run"
            component={RunScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Graphic"
            component={GraphicScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
