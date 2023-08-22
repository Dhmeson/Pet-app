import { Platform } from "react-native";

export const shadowStyle =
	Platform.OS === "android"
		? {
				elevation: 4, // Elevation para Android
		  }
		: {
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.3,
				shadowRadius: 4, // Propriedades de sombra para iOS
		  };
export const HORIZONTAL_PADDING = 30;
