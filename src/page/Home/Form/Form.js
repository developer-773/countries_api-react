import { useState } from "react";

import "./Form.css";

export default function Form(props) {

	const [inputValue, setInput] = useState("");
	const [values, setSelect] = useState('');

	const handleFormInput = (evt) => {
		if (evt.key === "Enter") {
			props.searchCountries(inputValue)
		}
		
	}


	function handleSelect (evt) {
		props.searchCountriesBySelect(evt.target.value)
		setSelect(evt.target.value)
	}


	return (
		<div className="container">
			<div className="d-flex justify-content-between form">
			<label className="form_label" htmlFor="">
				<input className="form_input" value={inputValue} onChange={(evt) => setInput(evt.target.value)} onKeyDown={handleFormInput}  type="search" placeholder="Search for a country…" />
			</label>
			<select className="select" defaultValue={values} onChange={handleSelect}>
				<option value="Africa">Africa</option>
				<option value="America">America</option>
				<option value="Asia">Asia</option>
				<option  value="Europe">Europe</option>
				<option  value="Oceania">Oceania</option>
			</select>
			</div>
			</div>
	);
}
