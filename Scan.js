import React from 'react'
import {Modal, SafeAreaView, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {BarCodeScanner, Permissions} from 'expo';
import Header from "./Header";

export default class Scan extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			hasCameraPermission: null,
		}
	}

	async componentDidMount() {
		const {status} = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({hasCameraPermission: status === 'granted'});
	}

	render() {
		const {hasCameraPermission} = this.state;
		if (hasCameraPermission === null) {
			return <Text>Requesting for camera permission</Text>;
		}
		if (hasCameraPermission === false) {
			return <Text>No access to camera</Text>;
		}

		return (
			<Modal
				animationType="slide"
				transparent={false}
				visible={this.props.modalVisibility}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
				}}>
				<SafeAreaView style={{flex: 1}}>
					<Header/>
					<View style={{flex: 1}}>
						<View style={styles.modalContent}>
							<BarCodeScanner
								onBarCodeScanned={this.props.handleBarCodeScanned}
								style={StyleSheet.absoluteFill}
							/>
						</View>
						<TouchableHighlight
							style={styles.hideModalButton}
							onPress={this.props.closeModal}>
							<Text style={styles.hideModalText}>Hide Modal</Text>
						</TouchableHighlight>
					</View>
				</SafeAreaView>
			</Modal>
		)
	}
}

const styles = StyleSheet.create({
	modalContent: {
		flex: 1,
	},
	hideModalButton: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#08415c',
		padding: 10,
		height: 80,
	},
	hideModalText: {
		textAlign: 'center',
		fontSize: 20,
		color: 'white'
	},
});