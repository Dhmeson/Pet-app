import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { shadowStyle } from "../../constants/GlobalStyles";
import Colors from "../../constants/Colors";
import { iconColors } from "../../types/styles";

interface props extends ViewStyle {
	children: React.ReactNode;
	backgroundColor?: iconColors;
	action?: () => void;
}
export default function ButtonRoot({ children, action, ...props }: props) {
	const containerStyle = {
		...styles.conteiner,
		...props,
	};
	return (
		<TouchableOpacity onPress={() => action?.()} style={[containerStyle, shadowStyle]}>
			{children}
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	conteiner: {
		backgroundColor: Colors.green,
		width: 180,
		padding: 5,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		gap: 10,
		borderRadius: 5,
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.5,
		shadowRadius: 4,
	},
});
