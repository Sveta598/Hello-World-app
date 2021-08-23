import React from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import SavedInput from './SavedInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, Text, Button } from 'react-native-elements';
import Theme from './App/Theme/index'

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text h2>Home Screen</Text>
        <Icon name="rocket" size={30} color="#900" />
        <SavedInput/>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
}

function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
      </View>
    );
  }
  
  const Stack = createNativeStackNavigator();
   
   function App() {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={Theme}>
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
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
  
  export default App;

  ///TabBar.js
  import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import { Text, TabView } from 'react-native-elements';

function TabBar({ navigation }) {
    return (
        <TabView>
          <TouchableHighlight
              style={{ flex: 1, justifyContent: 'center' }}
              onPress={() => navigation.navigate('Home')}
          >
            <Image source={require('../Assets/Images/home.png')} />
          </TouchableHighlight>
          <Text h4 style={{ color: '#070207' }}>Home</Text>

          <TouchableHighlight
              style={{ flex: 1, justifyContent: 'center' }}
              onPress={() => navigation.navigate('Accounts')}
            >
            <Image source={require('../Assets/Images/accounts.png')} />
            <Text h4 style={{ color: '#070207' }}>Accounts</Text>
          </TouchableHighlight>
          
          <TouchableHighlight
              style={{ flex: 1, justifyContent: 'center' }}
              onPress={() => navigation.navigate('Giving')}
          >
            <Image source={require('../Assets/Images/giving.png')} />
            <Text h4 style={{ color: '#070207' }}>Giving</Text>
          </TouchableHighlight>
          
          <TouchableHighlight
              style={{ flex: 1, justifyContent: 'center' }}
              onPress={() => navigation.navigate('Payments')}
          >
            <Image source={require('../Assets/Images/payment.png')} />
            <Text h4 style={{ color: '#070207' }}>Payments</Text>
          </TouchableHighlight>
          
          <TouchableHighlight
              style={{ flex: 1, justifyContent: 'center' }}
              onPress={() => navigation.navigate('Cards')}
          >
            <Image source={require('../Assets/Images/cards.png')} />
            <Text h4 style={{ color: '#070207' }}>Cards</Text>
          </TouchableHighlight>
          
        </TabView>
    );
  }

  export default TabBar;

  //Tabbar.js
  import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import { Text, TabView } from 'react-native-elements';

function TabBar({ navigation }) {
    return (
        <TabView>
          <TouchableHighlight
              style={{ flex: 1, justifyContent: 'center' }}
              onPress={() => navigation.navigate('Home')}
          >
            <Image source={require('../Assets/Images/home.png')} />
          </TouchableHighlight>
          <Text h4 style={{ color: '#070207' }}>Home</Text>

          <TouchableHighlight
              style={{ flex: 1, justifyContent: 'center' }}
              onPress={() => navigation.navigate('Accounts')}
            >
            <Image source={require('../Assets/Images/accounts.png')} />
            <Text h4 style={{ color: '#070207' }}>Accounts</Text>
          </TouchableHighlight>
          
          <TouchableHighlight
              style={{ flex: 1, justifyContent: 'center' }}
              onPress={() => navigation.navigate('Giving')}
          >
            <Image source={require('../Assets/Images/giving.png')} />
            <Text h4 style={{ color: '#070207' }}>Giving</Text>
          </TouchableHighlight>
          
          <TouchableHighlight
              style={{ flex: 1, justifyContent: 'center' }}
              onPress={() => navigation.navigate('Payments')}
          >
            <Image source={require('../Assets/Images/payment.png')} />
            <Text h4 style={{ color: '#070207' }}>Payments</Text>
          </TouchableHighlight>
          
          <TouchableHighlight
              style={{ flex: 1, justifyContent: 'center' }}
              onPress={() => navigation.navigate('Cards')}
          >
            <Image source={require('../Assets/Images/cards.png')} />
            <Text h4 style={{ color: '#070207' }}>Cards</Text>
          </TouchableHighlight>
          
        </TabView>
    );
  }

  export default TabBar;
  
// Header
    /*function HomeTitle() {
    return (
      <View 
        style={{ flexDirection: 'row', borderBottomWidth: '2px', 
        borderBottomColor: '#e777d5', backgroundColor: '#ce0b83'}}>
           <Image 
            source={require('./App/Assets/Images/burgerMenulcon.png')}
            style={{flex: 1, color: '#e777d5'}} />
            <View style={{ flexDirection: 'row', flex: 4}}>
              <Image 
              source={require('./App/Assets/Images/logo.png')}
              style={{flex: 1, color: '#e777d5'}} />
            </View>
      </View>


    );
  }*/