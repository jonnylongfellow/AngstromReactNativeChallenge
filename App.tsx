import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, } from 'react-native';
import { Home } from './src/screens/Home';

function App(): React.JSX.Element {  
  const Stack = createStackNavigator();

  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
      
    </SafeAreaView>
  );
}

export default App;
