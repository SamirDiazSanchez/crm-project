import { NavBar } from './navbar';
import { SideBar } from "./sidebar";

export const Layout = ({children, title}) => {
	return(
		<div className='wrapper'>
			<NavBar title={title} />
			<SideBar />

			<div className='content-wrapper'>
				<div className="content">
					<div className="container-fluid pt-1">
						{children}
					</div>
				</div>
			</div>

			<footer className="main-footer">
				<strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
				All rights reserved.
				<div className="float-right d-none d-sm-inline-block">
					<b>Version</b> 3.2.0
				</div>
			</footer>

		</div>
	);
}