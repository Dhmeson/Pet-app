import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
	imageConteiner: {
		width: 150,
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: 130,
		height: 130,
		resizeMode: "cover",
		backgroundColor: Colors.blue,

		borderRadius: 100,
	},
	describeConteiner: {
		flex: 1,
		alignItems: "flex-start",
		justifyContent: "center",
		gap: 5,
		paddingLeft: 10,
	},
	editConteiner: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: 25,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
	},
	text: {
		fontSize: 18,
		fontWeight: "500",
		color: "black",
	},
});
