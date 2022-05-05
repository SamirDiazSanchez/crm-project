import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export const useAuth = () => {
	const [userData, setUserData] = useState(null);
	const { push } = useRouter();

	const updateUser = () => {
		let storage = window.localStorage.getItem('CRMProject');
		try {
			storage = JSON.parse(storage);
			setUserData(userData => userData = storage);
		}
		catch (error) {
			console.error(error);
		}
	}

	const setUser = (value) => {
		const storage = JSON.stringify(value);
		window.localStorage.setItem('CRMProject', storage);
		updateUser();
	}

	const removeUser = () => {
		window.localStorage.removeItem('CRMProject');
		updateUser();
		push('/');
	}

	useEffect(() => {
		updateUser();
	}, [])

	return {
		userData,
		setUser,
		removeUser 
	}
}