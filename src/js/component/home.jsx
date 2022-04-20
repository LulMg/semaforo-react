import React, { useState } from "react";

//create your first component
const Home = () => {
	const [luz, setLuz] = useState("");
	return (
		<div>
			<div className="container bg-dark" id="palo"></div>
			<div
				className=" container bg-dark rounded d-flex justify-content-center flex-column"
				id="caja">
				<input
					type="button"
					className={
						"m-1 rounded-circle bg-danger " +
						(luz !== "red" ? "" : "shadow")
					}
					onClick={() => {
						setLuz("red");
					}}
				/>
				<input
					type="button"
					className={
						"m-1 rounded-circle bg-warning " +
						(luz !== "yellow" ? "" : "shadow")
					}
					onClick={() => {
						setLuz("yellow");
					}}
				/>
				<input
					type="button"
					className={
						"m-1 rounded-circle bg-success " +
						(luz !== "green" ? "" : "shadow")
					}
					onClick={() => {
						setLuz("green");
					}}
				/>
			</div>
		</div>
	);
};

export default Home;
