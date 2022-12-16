import "./index.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import Loader from "./components/Loader/Loader";

function App() {

	const [data, setData] = useState({
		country: [],
		isLoading: true,
	})



	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
		.then(res => res.json())
		.then(data => {
			setData({
				country: data,
				isLoading: false,
			})
		})
		.catch(err=> console.log(err))
	}, []);

	function searchCountries (str) {

		fetch(`https://restcountries.com/v3.1/${str ? `name/${str}` : `all` }`)
		.then(res => res.json())
		.then(data => {
			setData({
				country: data,
				isLoading: false,
			})
		})
	}

	function searchCountriesBySelect (option) {
		fetch(`https://restcountries.com/v3.1/${option ? `region/${option}` : `all` }`)
		.then(res => res.json())
		.then(data => {
			setData({
				country: data,
				isLoading: false,
			})
		})

	}

	


	return (
		<div>
			<Header />			
			<Form searchCountries={searchCountries} searchCountriesBySelect={searchCountriesBySelect}/>
			{data.isLoading ? <Loader /> : (<Main data={data.country}/>)}
			<Footer />
		</div>
	);
}

export default App;
