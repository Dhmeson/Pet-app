import { StyleSheet, Image, ImageProps, TouchableOpacity, Text } from "react-native";

import { AnimalProps } from "../types/class";
import Colors from "../constants/Colors";

export function BoxAnimal({ icon, name }: AnimalProps) {
	const i: ImageProps = { source: icon };
	return (
		<TouchableOpacity style={styles.container}>
			<Image style={styles.image} source={i.source}></Image>
			<Text style={styles.text}>{name}</Text>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	container: {
		width: 100,
		height: 100,

		backgroundColor: Colors.bgBox,
		marginVertical: 10,
		alignItems: "center",
		gap: 2,
	},
	text: {
		fontStyle: "italic",
		fontWeight: "500",
		fontSize: 18,
		position: "absolute",
		bottom: -25,
		zIndex: 10,
	},
	image: {
		width: 100,
		height: 100,
		//resizeMode: "contain",
		borderRadius: 100,
	},
});
