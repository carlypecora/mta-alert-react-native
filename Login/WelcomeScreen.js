import React from 'react';
import { View, StyleSheet, TouchableHighlight, Text, ImageBackground } from 'react-native';

export default class WelcomeScreen extends React.Component {

	render() {
		return(
				<View>
					<TouchableHighlight
						onPress={() => this.props.navigation.navigate('Login')}
					>
						<Text style={this.styles.buttonText}>
							Login
						</Text>
					</TouchableHighlight>
					<TouchableHighlight
						onPress={() => this.props.navigation.navigate('Signup')}
					>
						<Text style={this.styles.buttonText}>
							Create Account
						</Text>
					</TouchableHighlight>
				</View>
		);
	}
	styles = StyleSheet.create({
		buttonText: {
			width: 200,
			backgroundColor: '#033b63',
			color: 'white',
			fontSize: 25,
			color: '#fff',
			padding: 10,
			margin: 10,
			textAlign: 'center'
		}
	})
};
