import { TextInput, TextStyle, StyleSheet, KeyboardType } from "react-native";
import { placeHolderColors } from "../../types/styles";

interface props extends TextStyle {
	placeholder: string;
	placeholderTextColor?: placeHolderColors;
	keyboardType?: KeyboardType;
}
export default function InputField({ placeholder, keyboardType, placeholderTextColor, ...props }: props) {
	const containerStyle = {
		...styles.conteiner,
		...props,
	};
	return (
		<TextInput
			keyboardType={keyboardType ?? "ascii-capable"}
			style={[containerStyle]}
			placeholder={placeholder}
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
