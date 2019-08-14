import React from 'react';
import Login from './Login/Login'
import Signup from './Login/Signup'
import WelcomeScreen from './Login/WelcomeScreen'
import { StyleSheet, Button, View } from 'react-native'
import { createStackNavigator,
         createSwitchNavigator,
         createAppContainer
        } from "react-navigation"


export default class App extends React.Component {

render(){
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    )
  }
}

const LoginStackNavigator = createStackNavigator(
  { 
    Login: { screen: Login } 
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Button
            name='chevron-left'
            size={30}
            title="Login"
            style={{ paddingLeft: 10, paddingBottom: 20, color: 'gold' }}
            onPress={() => navigation.navigate('Welcome')}
          />
        )
      };
    }
  }
)

const UserStackNavigator = createStackNavigator(
  { Signup: { screen: Signup} },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Button
            name='chevron-left'
            size={30}
            title="Signup"
            style={{ paddingLeft: 10, color: 'gold' }}
            onPress={() => navigation.navigate('Welcome')}
          />
        )
      };
    }
  }
);

const WelcomeSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Login: { screen: LoginStackNavigator },
  Signup: { screen: UserStackNavigator },
});

const AppContainer = createAppContainer(WelcomeSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aad0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
