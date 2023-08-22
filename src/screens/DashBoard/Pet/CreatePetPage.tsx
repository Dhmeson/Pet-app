import { View, Text, StyleSheet, KeyboardAvoidingView, StatusBar } from "react-native";

import { Input } from "../../../components/Input";

import { Button } from "../../../components/Button";
import React from "react";
import ImagePickerComponent from "../../../components/ImagePickerComponent ";
import { HORIZONTAL_PADDING } from "../../../constants/GlobalStyles";
import { useInfoKeyboard } from "../../../hooks/useInfoKeyBoard";
import { OptionsSelectProps } from "../../../types/components";
import Colors from "../../../constants/Colors";

export function CreatePetPage() {
	const { isOpen } = useInfoKeyboard();
	const optionsSelectProps: OptionsSelectProps[] = [
		{ label: "Macho", value: "male" },
		{ label: "Femea", value: "female" },
	];
	return (
		<View style={styles.container}>
			<StatusBar hidden={true} />

			<ImagePickerComponent display={isOpen ? "none" : "flex"} />

			<View style={styles.formulary}>
				<Text style={styles.titleForm}>Informações iniciais</Text>
				<KeyboardAvoidingView style={styles.keyboard}>
					<Input.Root inputStyleType='noBG'>
						<Input.Icon name='paw' color='#949292'></Input.Icon>
						<Input.Field placeholder='Nome' placeholderTextColor='black'></Input.Field>
					</Input.Root>
					<Input.Root inputStyleType='noBG'>
						<Input.Icon name='birthday-cake' color='#949292'></Input.Icon>
						<Input.Date placeholder='Data de nascimento' placeholderTextColor='black'></Input.Date>
					</Input.Root>
					<Input.Root inputStyleType='noBG'>
						<Input.Icon name='balance-scale' color='#949292'></Input.Icon>
						<Input.Field keyboardType='numeric' placeholder='Peso em KG' placeholderTextColor='black'></Input.Field>
					</Input.Root>
					<Input.Root inputStyleType='noBG' padding={0} marginTop={-10}>
						<Input.Icon name='venus-mars' color='#949292'></Input.Icon>
						<Input.Select options={optionsSelectProps}></Input.Select>
					</Input.Root>
					<Button.Root width={"100%"} display={isOpen ? "none" : "flex"} backgroundColor={Colors.blue}>
						<Button.Text padding={5} color={Colors.white} text='Salvar' fontSize={18}></Button.Text>
					</Button.Root>
				</KeyboardAvoidingView>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 10,
	},

	formulary: {
		width: "100%",
		height: "100%",
		paddingLeft: HORIZONTAL_PADDING,
		paddingRight: HORIZONTAL_PADDING,
		marginTop: 10,
	},
	titleForm: {
		//fontFamily: "Fredoka",
		fontSize: 24,
		fontWeight: "600",
		width: "100%",
		textAlign: "center",
		marginBottom: 5,
	},
	keyboard: {
		gap: 20,
	},
});
