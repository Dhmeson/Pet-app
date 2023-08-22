import React, { createContext, useState, useContext } from "react";

interface PetContextType {
	id: string;
	setId: (id: string) => void;
}

const PetContext = createContext<PetContextType | undefined>(undefined);

function PetProvider({ children }: { children: React.ReactNode }) {
	const [id, setId] = useState<string>("");

	return <PetContext.Provider value={{ id, setId }}>{children}</PetContext.Provider>;
}

function usePetContext(): PetContextType {
	const context = useContext(PetContext);
	if (!context) {
		throw new Error("useIdContext must be used within an PetProvider");
	}
	return context;
}

export { PetProvider, usePetContext };
