import { Text, StyleSheet, TextStyle } from "react-native";
interface props extends TextStyle {
	text: string;
}
export default function ButtonText({ text, ...props }: props) {
	const containerStyle = {
		...styles.conteiner,
		...props,
	};

	return <Text style={[containerStyle]}>{text}</Text>;
}
const styles = StyleSheet.create({
	conteiner: {
		fontWeight: "bold",

		fontFamily: "Fredoka",
	},
});
