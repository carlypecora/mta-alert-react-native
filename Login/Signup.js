import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Button } from 'react-native'

class SignUp extends React.Component {

	state = {
		username: '',
		password: '',
		password_confirmation: ''
	}

	handleUsernameChange = value => {
		this.setState({
			username: value
		})
	}

	handlePasswordChange = value => {
		this.setState({
			password: value
		})
	}

	handlePasswordConfirmChange

	handleSubmit = (e) => {
		console.log(this.state)
	}

	render(){
	
		return(
			<View>
				<StatusBar 
					backgroundColor='#033b63'
					barStyle='light-content'

				/>
				<Text style={styles.text}>Signup</Text>
				<TextInput 
					style={styles.input}
					placeholder={"Username"}
					name="username"
					onChangeText={this.handleusernameChange}
				/>
				<TextInput 
					style={styles.input}
					name="password"
					placeholder={"Password"}
					secureTextEntry={true}
					onChangeText={this.handlePasswordChange}
				/>
				<TextInput 
					style={styles.input}
					name="password_confirmation"
					placeholder={"Confirm Password"}
					secureTextEntry={true}
					onChangeText={this.handlePasswordConfirmChange}
				/>
				<View>
					<TouchableOpacity 
						onPress={this.handleSubmit}
						style={styles.button}
					>
						<Text style={styles.btnText}>Submit</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	input: {
		width: 300,
		backgroundColor: '#fff',
		padding: 15,
		marginTop: 15
	},
	text: {
		textAlign: 'center',
		fontSize: 30,
		color: '#fff'
	},
	button: {
		textAlign: 'center',
		backgroundColor: '#033b63',
		marginTop: 15
	},

	btnText: {
		fontSize: 25,
		color: '#fff',
		padding: 5,
		textAlign: 'center'
	}
})

export default SignUp