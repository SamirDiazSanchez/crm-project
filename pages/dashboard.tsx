import { Layout } from "../components/layout/layout";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "context/authContext";

const Dashboard = () => {
	const { push } = useRouter();

	useEffect(() => {
		
	}, [])
	
	return(
		<Layout title="Dashboard">
			
		</Layout>
	);
}

export default Dashboard;