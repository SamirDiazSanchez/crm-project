import { DataProvider } from 'context/authContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/login.custom.css';

const App = ({ Component, pageProps }) => {
	return (
		<DataProvider>
			<Component {...pageProps}/>
		</DataProvider>
	);
}

export default App;