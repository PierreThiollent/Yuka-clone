import React from "react";
import {Modal, SafeAreaView, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import Header from "./Header";
import ScanButtonView from "./ScanButtonView";
import ProductList from "./ProductList";

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			products: [
				{id: 1, name: 'Coca', date: new Date()},
				{id: 2, name: 'Orangina', date: new Date()},
				{id: 3, name: 'Nestea', date: new Date()},
				{id: 4, name: 'Bière sans alcool', date: new Date()}
			],
			modalVisible: false
		}
	}

	handleScanPress = () => {
		this.setModalVisible()
	};

	handleProductPress = (id) => {
		alert('Je clique sur un produit avec l\'id : ' + id)
	};

	setModalVisible() {
		let newModalState = !this.state.modalVisible;
		this.setState({modalVisible: newModalState});
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Header/>
				<ScanButtonView scan={this.handleScanPress}/>
				<ProductList data={this.state.products} onPressItem={this.handleProductPress}/>
				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						Alert.alert('Modal has been closed.');
					}}>
					<SafeAreaView style={{flex: 1}}>
						<Header/>
						<View style={{flex: 1}}>
							<View style={styles.modalContent}>
							</View>
							<TouchableHighlight
								style={styles.hideModalButton}
								onPress={() => {
									this.setModalVisible(!this.state.modalVisible);
								}}>
								<Text style={styles.hideModalText}>Hide Modal</Text>
							</TouchableHighlight>
						</View>
					</SafeAreaView>
				</Modal>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
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
