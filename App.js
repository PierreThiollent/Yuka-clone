import React from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import Header from "./Header";
import ScanButtonView from "./ScanButtonView";
import ProductList from "./ProductList";
import Scan from "./Scan";

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			products: [
			],
			modalScanVisible: false,
			hasCameraPermission: null,
		}
	}

	handleScanPress = () => {
		this.setModalScanVisible()
	};

	handleProductPress = (id) => {
		alert('Je clique sur un produit avec le code barre : ' + id)
	};

	getProductFromApi = async (data) => {
		try {
			let response = await fetch(
				'https://fr.openfoodfacts.org/api/v0/produit/' + data + '.json'
			);
			let responseJson = await response.json();
			return responseJson.product;
		} catch (error) {
			console.error(error);
		}
	};

	_handleBarCodeRead = async ({type, data}) => {
		let scannedProduct = await this.getProductFromApi(data);
		let newProduct = {id: 1, name: scannedProduct.product_name, date: new Date()};
		let _products = this.state.products;
		_products.push(newProduct);
		this.setState({products: _products});
		this.setModalScanVisible()
	};

	setModalScanVisible = () => {
		let newModalState = !this.state.modalScanVisible;
		this.setState({modalScanVisible: newModalState});
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Header/>
				<ScanButtonView scan={this.handleScanPress}/>
				<ProductList data={this.state.products} onPressItem={this.handleProductPress}/>
				<Scan modalVisibility={this.state.modalScanVisible} closeModal={this.setModalScanVisible}
							handleBarCodeScanned={this._handleBarCodeRead}
							getProducts={this.getProductFromApi}/>
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
