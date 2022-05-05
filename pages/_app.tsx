import { DataProvider } from 'context/authContext';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ Component, pageProps }) => {
	return (
		<DataProvider>
			<Component {...pageProps}/>
		</DataProvider>
	);
}

export default App;