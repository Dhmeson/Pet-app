import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";

export const useInfoKeyboard = () => {
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		// Adicionar o listener quando o componente é montado
		Keyboard.addListener("keyboardDidShow", onKeyboardDidShow);
		Keyboard.addListener("keyboardDidHide", onKeyboardDidHide);

		// Remover o listener quando o componente é desmontado
		return () => {
			Keyboard.removeAllListeners("keyboardDidShow");
			Keyboard.removeAllListeners("keyboardDidHide");
		};
	}, []);

	const onKeyboardDidShow = () => {
		setIsOpen(true);
	};

	const onKeyboardDidHide = () => {
		setIsOpen(false);
		// Aqui você pode executar ações adicionais quando o teclado é ocultado
	};

	return {
		isOpen,
	};
};
