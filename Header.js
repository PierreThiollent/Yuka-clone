import React from "react";
import {Dimensions, Image, StyleSheet, View} from "react-native";
import logo from './assets/logo.png';

export default class Header extends React.Component {
	render() {
		return (
			<View style={styles.logoContainer}>
				<Image source={logo} style={styles.logo}/>
			</View>
		)
	}
}
	const styles = StyleSheet.create({
		logoContainer: {
			width: Dimensions.get('window').width,
			height: 100,
			alignItems: 'center',
			justifyContent: 'center'
		},
		logo: {
			width: 100,
			height: 100
		},
	});