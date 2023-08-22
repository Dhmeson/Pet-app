import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Button } from "./Button";
import Colors from "../constants/Colors";

interface props {
	display: "none" | "flex";
}
function ImagePickerComponent({ display }: props) {
	const [imageUri, setImageUri] = useState<string | null>(null);

	const handleSelectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [4, 3],
				quality: 1,
			});

			if (!result.canceled) {
				setImageUri(result.assets[0].uri);
			}
		} catch (error) {
			console.log("Error selecting image:", error);
		}
	};

	const handleTakePhoto = async () => {
		try {
			const result = await ImagePicker.launchCameraAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [4, 3],
				quality: 1,
			});

			if (!result.canceled) {
				setImageUri(result.assets[0].uri);
			}
		} catch (error) {
			console.log("Error taking photo:", error);
		}
	};

	return (
		<View style={[styles.container, { display }]}>
			{imageUri ? (
				<Image source={{ uri: imageUri }} style={styles.image} />
			) : (
				<TouchableOpacity style={styles.conteinerImage} onPress={handleTakePhoto}>
					<FontAwesome name='camera' size={50}></FontAwesome>
				</TouchableOpacity>
			)}
			<Button.Root padding={10} action={handleSelectImage} backgroundColor={Colors.blue}>
				<Button.Text color={"white"} text='Selecionar uma foto'></Button.Text>
				<Button.Icon name='photo' color='white'></Button.Icon>
			</Button.Root>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 200,
		gap: 10,
		alignItems: "center",
		marginTop: 10,
	},
	image: {
		width: 160,
		height: 160,
		resizeMode: "cover",
		borderRadius: 100,
	},
	placeholder: {
		justifyContent: "center",
		alignItems: "center",
	},
	conteinerImage: {
		backgroundColor: Colors.gray100,
		alignItems: "center",
		justifyContent: "center",
		width: 160,
		height: 160,
		borderRadius: 100,
	},
});

export default ImagePickerComponent;

/**
 * export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
}

 */
