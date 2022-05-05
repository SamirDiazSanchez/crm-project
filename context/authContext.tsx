import { createContext, useEffect } from "react";

export const AuthContext = createContext<any>({});

export const DataProvider = ({ children }) => {

	const valueData = {

	}

	useEffect(() => {
		
	}, [])

	return (
		<AuthContext.Provider
			value={valueData}
		>
			{ children }
		</AuthContext.Provider>
	);
}