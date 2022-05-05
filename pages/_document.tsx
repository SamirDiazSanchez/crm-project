import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return(
			<Html>
				<Head>
					<base href="./" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
					<link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
					<link rel="stylesheet" href="./plugins/fontawesome-free/css/all.min.css" />
					<link rel="stylesheet" href="./plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
					<link rel="stylesheet" href="./plugins/jqvmap/jqvmap.min.css" />
					<link rel="stylesheet" href="./dist/css/adminlte.min.css" />
					<link rel="stylesheet" href="./plugins/overlayScrollbars/css/OverlayScrollbars.min.css" />
					<link rel="stylesheet" href="./plugins/daterangepicker/daterangepicker.css" />
					<link rel="stylesheet" href="./plugins/summernote/summernote-bs4.min.css" />
					<link rel="stylesheet" href="./css/login.css" />
				</Head>
				<body className="hold-transition sidebar-mini layout-fixed">
					<Main />
					<NextScript />
					<script src="./plugins/jquery/jquery.min.js"></script>
					<script src="./plugins/jquery-ui/jquery-ui.min.js"></script>
					<script>
						$.widget.bridge('uibutton', $.ui.button)
					</script>
					<script src="./plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
					<script src="./plugins/chart.js/Chart.min.js"></script>
					<script src="./plugins/sparklines/sparkline.js"></script>
					<script src="./plugins/jqvmap/jquery.vmap.min.js"></script>
					<script src="./plugins/jqvmap/maps/jquery.vmap.usa.js"></script>
					<script src="./plugins/jquery-knob/jquery.knob.min.js"></script>
					<script src="./plugins/moment/moment.min.js"></script>
					<script src="./plugins/daterangepicker/daterangepicker.js"></script>
					<script src="./plugins/summernote/summernote-bs4.min.js"></script>
					<script src="./plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
					<script src="./dist/js/adminlte.js"></script>
				</body>
			</Html>
		);
	}
}