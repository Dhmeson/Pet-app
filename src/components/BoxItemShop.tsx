import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AnimalCategoryProps } from "../types/class";
import { BorderColorsCategory } from "../types/styles";
import Colors from "../constants/Colors";

const cartIcon = require("../../assets/images/shop/addCart.png");
const item = require("../../assets/images/shop/item.png");
interface props {
	category: AnimalCategoryProps;
}
export function BoxItemShop({ category }: props) {
	let borderColor: BorderColorsCategory = "#107dea";
	if (category == "puppy") borderColor = "#107dea";
	if (category == "young") borderColor = "#db2d2d";
	if (category == "adult") borderColor = "#422ddb";

	return (
		<View style={styles.container}>
			<Image style={styles.itemImage} source={item}></Image>
			<View style={styles.infoProduct}>
				<Text style={styles.productName}>Nome do item</Text>
				<Text style={styles.productDescribe}>100g</Text>
				<View style={[styles.category, { borderColor }]}>
					<Text style={styles.categoryText}>Adulto</Text>
				</View>

				<Text style={styles.price}>R$ 13,99</Text>
			</View>
			<View>
				<TouchableOpacity>
					<Image style={styles.addCartImage} source={cartIcon}></Image>
				</TouchableOpacity>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		gap: 2,
	},
	infoProduct: {
		width: "50%",
		alignItems: "flex-start",
		paddingLeft: 10,
		gap: 2,
	},
	itemImage: {
		width: 90,
		height: 90,
	},
	addCartImage: {
		width: 90,
		height: 90,
	},
	productName: {
		fontSize: 20,
		fontWeight: "300",
		fontFamily: "Fredoka",
	},
	productDescribe: {
		fontSize: 16,
		fontWeight: "300",
		fontFamily: "Fredoka",
	},
	category: {
		borderWidth: 1,
		borderRadius: 8,
		padding: 4,
		width: 60,
		alignItems: "center",
	},
	categoryText: {
		fontSize: 14,
		fontWeight: "700",
	},
	price: {
		fontSize: 23,
		fontWeight: "300",
		fontFamily: "Fredoka",
		color: Colors.green200,
	},
});
