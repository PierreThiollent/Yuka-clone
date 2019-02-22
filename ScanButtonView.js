import React from "react";
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default class ScanButtonView extends React.Component {
	render() {
		return (
			<View style={styles.scanButtonContainer}>
				<TouchableOpacity style={styles.scanButton} onPress={this.props.scan}>
					<Text style={styles.scanButtonText}>Scanner</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	scanButtonContainer: {
		width: Dimensions.get('window').width,
		height: 120,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 1
	},
	scanButton: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#08415c',
		padding: 10,
		width: Dimensions.get('window').width - 20,
		height: 80,
	},

	scanButtonText: {
		textAlign: 'center',
		fontSize: 20,
		color: 'white'
	},
});