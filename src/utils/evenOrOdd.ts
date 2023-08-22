import { evenOrOddProps } from "../types/utils";

export function evenOrOdd(n: number): evenOrOddProps {
	if (n % 2 === 0) {
		return "even";
	} else {
		return "odd";
	}
}
