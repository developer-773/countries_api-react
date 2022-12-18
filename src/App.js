import "./index.css";
import Header from "./components/General/Header/Header";
import Home from "./page/Home/Home";
import Loader from "./components/General/Loader/Loader";
import Footer from "./components/General/Footer/Footer";
import CountryInfo from "./page/CountryInfo/CountryInfo";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
	const [data, setData] = useState({
		country: [],
		isLoading: true,
	});

	useEffect(() => {
		async function getData() {
			try {
				const res = await fetch("https://restcountries.com/v3.1/all");
				const data = await res.json();
				setData({
					country: data,
					isLoading: false,
				});
			} catch (error) {}
		}

		getData();
	}, []);

	async function searchCountries(str) {
		try {
			const response = await fetch(
				`https://restcountries.com/v3.1/${str ? `name/${str}` : `all`}`
			);
			const data = await response.json();
			setData({
				country: data,
				isLoading: false,
			});
		} catch (err) {
			console.log(err.message);
		}
	}

	async function searchCountriesBySelect(option) {
		try {
			const response = await fetch(
				`https://restcountries.com/v3.1/${option ? `region/${option}` : `all`}`
			);
			const data = await response.json();
			setData({
				country: data,
				isLoading: false,
			});
		} catch (err) {
			console.log(err.message);
		}
	}

	return (
		<div>
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						data.isLoading ? (
							<Loader />
						) : (
							<Home
								searchCountries={searchCountries}
								searchCountriesBySelect={searchCountriesBySelect}
								data={data.country}
							/>
						)
					}
				/>

				<Route path="/CountryInfo/:id" element={<CountryInfo />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
