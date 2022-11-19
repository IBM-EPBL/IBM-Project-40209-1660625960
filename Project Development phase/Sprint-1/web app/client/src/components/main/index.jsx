import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>DASHBOARD - Estimate the Crop Yield</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<iframe title="undefined" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=undefined&autoAuth=true&ctid=79c5e90a-7557-4fa5-ac56-8cb146098a99" frameborder="0" allowFullScreen="true"></iframe>
		</div>

	);
};

export default Main;
