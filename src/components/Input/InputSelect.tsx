import { TextStyle, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { OptionsSelectProps } from "../../types/components";
import { placeHolderColors } from "../../types/styles";

interface props extends TextStyle {
	placeholderTextColor?: placeHolderColors;
	options: OptionsSelectProps[];
}
export default function InputSelect({ placeholderTextColor, options, ...props }: props) {
	const containerStyle = {
		...styles.conteiner,
		...props,
	};
	const [selectedValue, setSelectedValue] = useState("Sexo");
	return (
		<Picker
			style={[containerStyle, { width: "100%" }]}
			mode='dropdown'
			selectedValue={selectedValue}
			onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
			{options.map((item) => {
				return <Picker.Item label={item.label} value={item.value} key={item.value} />;
			})}
		</Picker>
	);
}

const styles = StyleSheet.create({
	conteiner: {
		color: "black",
		textDecorationColor: "white",
	},
});
