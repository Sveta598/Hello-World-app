import React from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SavedInput from './SavedInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, Text, Button } from 'react-native-elements';
import Theme from './App/Theme/index'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ThemeProvider theme={Theme}>
        <Text h2>Home Screen</Text>
      </ThemeProvider>
      <Icon name="rocket" size={30} color="#900" />
      <SavedInput/>
      <ThemeProvider theme={Theme}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </ThemeProvider>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ThemeProvider theme={Theme}>
        <Text h2>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Image source={require('./App/Assets/Images/home.png')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </ThemeProvider>
    </View>
  );
}

const Stack = createNativeStackNavigator();
 
 function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} 
            options={{ 
              title: 'My home', 
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} 
            options={{ 
              headerStyle: {
                backgroundColor: '#51bbd9',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
