import { ImageSourcePropType } from "react-native";

export interface AnimalProps {
	id: string;
	icon: ImageSourcePropType;
	name: string;
}
export type AnimalCategoryProps = "puppy" | "young" | "adult";
