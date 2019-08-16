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


const WelcomeSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Login: { screen: Login },
  Signup: { screen: Signup },
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
