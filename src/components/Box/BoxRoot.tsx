import { View, ViewStyle, StyleSheet } from "react-native";
import { shadowStyle } from "../../constants/GlobalStyles";
import Colors from "../../constants/Colors";

interface props extends ViewStyle {
	children: React.ReactNode;
}
export default function BoxRoot({ children, ...props }: props) {
	const containerStyle = {
		...styles.default,
		...props,
	};
	return <View style={[containerStyle, shadowStyle]}>{children}</View>;
}
const styles = StyleSheet.create({
	default: {
		backgroundColor: Colors.bgBox,

		flexDirection: "column",

		padding: 10,
		paddingLeft: 10,
		borderRadius: 8,
		gap: 10,
		minWidth: 300,
		maxHeight: 300,
		width: "100%",
		height: 200,
	},
});
