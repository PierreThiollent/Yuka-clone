import React from "react";
import {Dimensions, FlatList, StyleSheet, Text} from "react-native";
import ProductItem from "./ProductItem";

export default class ProductList extends React.Component {

	_keyExtractor = (item) => item.id;

	render() {
		console.log(this.props.data)
		return (
			<FlatList
				style={styles.flatList}
				data={this.props.data}
				ListEmptyComponent={() => <Text>Veuillez scanner un produit</Text>}
				keyExtractor={this._keyExtractor}
				renderItem={({item}) =>
					<ProductItem detail={item}/>
				}
			/>
		)
	}
}
const styles = StyleSheet.create({
	flatList: {
		width: Dimensions.get('window').width,
		flex: 1
	},
});