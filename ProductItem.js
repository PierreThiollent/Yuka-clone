import React from "react";
import {Dimensions, StyleSheet, Text, TouchableOpacity} from "react-native";

export default class ProductItem extends React.Component {
	render() {
		return (
			<TouchableOpacity onPress={() => this.props.onPressItem(this.props.onPressItem.id)}
												style={styles.products}>
				<Text style={styles.productsTitle}>{this.props.onPressItem.name}</Text>
				<Text style={styles.productsTitle}>{this.props.onPressItem.date.toLocaleDateString()}</Text>
			</TouchableOpacity>
		)
	}
}
const styles = StyleSheet.create({
	products: {
		padding: 20,
		width: 100 + '%',
		borderBottomWidth: 1
	},
	productsTitle: {
		width: Dimensions.get('window').width,
		fontSize: 18,
	}
});