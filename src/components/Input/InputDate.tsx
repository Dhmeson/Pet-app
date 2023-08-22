import { TextInput, TextStyle, StyleSheet } from "react-native";

import { useState } from "react";
import { placeHolderColors } from "../../types/styles";
interface props extends TextStyle {
	placeholder: string;
	placeholderTextColor?: placeHolderColors;
}
export default function InputDate({ placeholder, placeholderTextColor, ...props }: props) {
	const containerStyle = {
		...styles.conteiner,
		...props,
	};

	const [formattedDate, setFormattedDate] = useState("");

	const formatDate = (inputDate: string) => {
		// Implemente a lógica para formatar a data conforme a máscara desejada
		// Neste exemplo, estamos usando uma máscara "DD/MM/YYYY"
		let formatted = inputDate.replace(/\D/g, ""); // Remove todos os caracteres não numéricos

		if (formatted.length > 2) {
			formatted = `${formatted.slice(0, 2)}/${formatted.slice(2)}`;
		}
		if (formatted.length > 5) {
			formatted = `${formatted.slice(0, 5)}/${formatted.slice(5, 9)}`;
		}

		return formatted;
	};
	const handleInputChange = (text: string) => {
		const formatted = formatDate(text);
		setFormattedDate(formatted);
	};
	return (
		<TextInput
			keyboardType='numeric'
			style={[containerStyle]}
			placeholder={placeholder}
			value={formattedDate}
			onChangeText={handleInputChange}
			maxLength={10}
			placeholderTextColor={placeholderTextColor ?? "white"}></TextInput>
	);
}

const styles = StyleSheet.create({
	conteiner: {
		color: "black",
		textDecorationColor: "white",
	},
});
/**
 *interface Props extends TextStyle {
  placeholder?: string;
}

const InputField = forwardRef<TextInput, Props>((props, ref) => {
  const containerStyle = {
    ...styles.container,
    ...props,
  };

  return (
    <TextInput
      ref={ref}
      style={[containerStyle]}
      placeholder={props.placeholder}
    />
  );
});
 */
