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
			fontSize: 17,
			borderWidth: 1,
			borderColor: 'gold',
			color: 'gold',
			margin: 10,
			padding: 10,
			textAlign: 'center'
		}
	})
};
