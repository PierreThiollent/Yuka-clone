import React from "react";
import {Dimensions, FlatList, StyleSheet} from "react-native";
import ProductItem from "./ProductItem";

export default class ProductList extends React.Component {

	render() {
		return (
			<FlatList
				style={styles.flatList}
				data={this.props.data}
				renderItem={({item, index}) =>
					<ProductItem detail={this.props.detail} onPressItem={item} key={index}/>
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