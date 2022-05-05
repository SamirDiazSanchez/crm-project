import Link from "next/link";
import { useAuth } from 'hooks/useAuth';

export const NavBar = ({title}) => {
	const {
		removeUser
	} = useAuth();

	const logOut = e => {
		e.preventDefault();
		removeUser();
	}

	return(
		<nav className="main-header navbar navbar-expand navbar-white navbar-light">
			{/* Left navbar links */}
			<ul className="navbar-nav">
				<li className="nav-item">
					<a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
				</li>
				<li className="nav-item d-none d-sm-inline-block">
					<a className="nav-link">{title}</a>
				</li>
			</ul>
			{/* Right navbar links */}
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<a href="" className="nav-link" onClick={logOut}>
						<i className="ion-log-out pe-2" />
						LogOut
					</a>
				</li>
			</ul>
		</nav>

	);
}