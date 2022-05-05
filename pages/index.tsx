import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "hooks/useAuth";
import authService from "services/authService";

const Login = () => {
	const [loading, setLoading] = useState(false);
	const [ok, setOk] = useState(false);
	const [error, setError] = useState(false);
	const [state, setState] = useState('Log in');
	const {
		setUser,
		removeUser,
		userData
	} = useAuth();
	
	const { push } = useRouter();

	const tryLogin = async (e) => {
		e.preventDefault();

		if (loading) {
			setLoading(false);
			setState('Log in');
			setOk(false);
			setError(false);
		}
		else {
			setLoading(true);
			setState('Authenticating');

			const url = process.env.NEXT_PUBLIC_API + 'auth/login';

			const userData = {
				userName: e.target['userName'].value,
				password: e.target['password'].value
			}

			const response = await authService.login(userData);

			if (response.isError) {
				setError(true);
				setState(response.message);
				return
			}

			setOk(true);
			setState(response.message);
			setUser(response.response);
		}
	}

	const checkSession = async () => {
		if (userData) {
			const response = await authService.auth(userData.token_refresh);

			if (response.status === 401) {
				removeUser();
				return
			}
			setUser(response.data);
			setLoading(true);			

			setTimeout(() => {
				setOk(true);
				setState('Ok');
				push('/dashboard');
			}, 500);
		}
	}

	useEffect(() => {
		checkSession();
	}, [userData]);

	return(
		<div className='content-login'>
			<div className="login-wrapper">
				<form
					className={`login ${loading ? 'loading' : ''} ${ok ? 'ok' : ''} ${error ? 'error' : ''}`}
					onSubmit={tryLogin}
				>
					<p className="title">Log in</p>
					<input type="text" name="userName" placeholder="User Name" required/>
					<i className="fa fa-user" />
					<input type="password" name="password" placeholder="Password" required />
					<i className="fa fa-key" />
					<a href="#">Forgot your password?</a>
					<button>
						{
							(loading && error === false && ok === false) &&
								<>
									<div className="spinner-border" style={{ marginBottom: '70px'}} role="status">
										<span className="sr-only">Loading...</span>
									</div>

									<br />
								</>
						}

						{
							(loading && error === true && ok === false) &&
								<>
									<div style={{ marginBottom: '70px', fontSize: '2.5rem'}}>
										<span className="ion-close-circled"></span>
									</div>

									<br />
								</>
						}

						{
							(loading && error === false && ok === true) &&
								<>
									<div style={{ marginBottom: '70px', fontSize: '2.5rem'}}>
										<span className="ion-checkmark-round"></span>
									</div>

									<br />
								</>
						}

						<span className="state">{ state }</span>
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;