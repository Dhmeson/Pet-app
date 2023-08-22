import { Text, TextStyle, StyleSheet } from "react-native";

interface props extends TextStyle {
	text: string;
}
export default function InputField({ text, ...props }: props) {
	const containerStyle = {
		...styles.conteiner,
		...props,
	};
	return <Text style={[containerStyle]}>{text}</Text>;
}

const styles = StyleSheet.create({
	conteiner: {
		color: "#000000",
		//	fontFamily: "Fredoka",
		fontWeight: "700",
		fontSize: 18,
	},
});
