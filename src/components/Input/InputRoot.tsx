import { View, ViewStyle, StyleSheet } from "react-native";
import { shadowStyle } from "../../constants/GlobalStyles";
import Colors from "../../constants/Colors";

interface props extends ViewStyle {
	children: React.ReactNode;
	inputStyleType?: "withBG" | "noBG";
}
export default function InputRoot({ children, inputStyleType = "withBG", ...props }: props) {
	const styleAdditional = inputStyleType == "withBG" ? shadowStyle : {};
	const inputBaseStyle = inputStyleType == "withBG" ? styles.default : styles.secodary;
	const containerStyle = {
		...inputBaseStyle,
		...props,
	};
	return <View style={[containerStyle, styleAdditional]}>{children}</View>;
}
const styles = StyleSheet.create({
	default: {
		backgroundColor: Colors.gray100,
		flexDirection: "row",
		alignItems: "center",
		padding: 8,
		paddingLeft: 10,
		borderRadius: 10,
		gap: 10,
		minWidth: 300,
	},
	secodary: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		padding: 8,
		paddingLeft: 10,
		borderRadius: 0,
		gap: 10,
		minWidth: 300,
		borderBottomWidth: 1,
	},
});
