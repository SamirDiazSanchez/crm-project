import Link from "next/link";
import { Router, useRouter } from "next/router";

export const SideBar = () => {
	const router = useRouter();

	const returnActive = (target) => {
		let className = 'nav-link ';

		let active = router.pathname == target ? 'active' : '';

		return className + active;
	}
	
	return(
		<aside className="main-sidebar sidebar-dark-primary elevation-4">
			<a className="brand-link">
				<img src="dist/img/sipe.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
				<span className="brand-text font-weight-light">CRM</span>
			</a>
			
			{/* Sidebar */}
			<div className="sidebar">
				<nav className="mt-2">
					<ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
						<li className="nav-item">
							<Link href="/dashboard">
								<a className={returnActive('/dashboard')}>
									<i className="nav-icon ion-home" />
									<p>
										Home
									</p>
								</a>
							</Link>
						</li>

						<li className="nav-item">
							<Link href="/clients">
								<a className={returnActive('/clients')}>
									<i className="nav-icon ion-person-stalker" />
									<p>
										Clients
									</p>
								</a>
							</Link>
						</li>

						<li className="nav-item">
							<Link href='/projects'>
								<a className={returnActive('/projects')}>
									<i className="nav-icon ion-document" />
									<p>
										Projects
									</p>
								</a>
							</Link>
						</li>

						<li className="nav-item">
							<Link href='/users'>
								<a className={returnActive('/users')}>
									<i className="nav-icon ion-person" />
									<p>
										Users
									</p>
								</a>
							</Link>
						</li>

						<li className="nav-item">
							<Link href='/account'>
								<a className={returnActive('/account')}>
									<i className="nav-icon ion-ios-gear" />
									<p>
										Account
									</p>
								</a>
							</Link>
						</li>

						{/* <li className="nav-item">
							<a href="#" className="nav-link">
								<i className="nav-icon fas fa-copy" />
								<p>
									Layout Options
									<i className="fas fa-angle-left right" />
									<span className="badge badge-info right">6</span>
								</p>
							</a>
							<ul className="nav nav-treeview">
								<li className="nav-item">
									<a href="pages/layout/top-nav.html" className="nav-link">
										<i className="far fa-circle nav-icon" />
										<p>Top Navigation</p>
									</a>
								</li>
								<li className="nav-item">
									<a href="pages/layout/top-nav-sidebar.html" className="nav-link">
										<i className="far fa-circle nav-icon" />
										<p>Top Navigation + Sidebar</p>
									</a>
								</li>
								<li className="nav-item">
									<a href="pages/layout/boxed.html" className="nav-link">
										<i className="far fa-circle nav-icon" />
										<p>Boxed</p>
									</a>
								</li>
								<li className="nav-item">
									<a href="pages/layout/fixed-sidebar.html" className="nav-link">
										<i className="far fa-circle nav-icon" />
										<p>Fixed Sidebar</p>
									</a>
								</li>
								<li className="nav-item">
									<a href="pages/layout/fixed-sidebar-custom.html" className="nav-link">
										<i className="far fa-circle nav-icon" />
										<p>Fixed Sidebar <small>+ Custom Area</small></p>
									</a>
								</li>
								<li className="nav-item">
									<a href="pages/layout/fixed-topnav.html" className="nav-link">
										<i className="far fa-circle nav-icon" />
										<p>Fixed Navbar</p>
									</a>
								</li>
								<li className="nav-item">
									<a href="pages/layout/fixed-footer.html" className="nav-link">
										<i className="far fa-circle nav-icon" />
										<p>Fixed Footer</p>
									</a>
								</li>
								<li className="nav-item">
									<a href="pages/layout/collapsed-sidebar.html" className="nav-link">
										<i className="far fa-circle nav-icon" />
										<p>Collapsed Sidebar</p>
									</a>
								</li>
							</ul>
						</li> */}
					</ul>
				</nav>
				{/* /.sidebar-menu */}
			</div>
			{/* /.sidebar */}
		</aside>
	);
}