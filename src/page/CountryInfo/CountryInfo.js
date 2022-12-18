import "./CountryInfo.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CountryInfo() {
	const [singleCountry, setSingleCountry] = useState([]);
	const { id } = useParams();

	const navigate = useNavigate();
	useEffect(() => {

		const getData = async () => {
			try {
				const response = await axios.get(
					`https://restcountries.com/v3.1/alpha/${id}`
				);
				setSingleCountry(response.data);
			} catch (error) {
				console.log(error.message);
			}
		};
		getData();
	}, [id]);

	return (
		<div className="countryInfoWrapper">
			<div className="container ">
				<button className="back" onClick={() => navigate(-1)}>
					Back
				</button>
				<>
					{singleCountry.map((item, i) => (
						<div
							className="d-flex flex-column align-items-start flex-md-row align-items-md-center justify-content-md-between"
							key={1}
						>
							<img src={item.flags.png}  alt="" />
							<div className="box" key={2}>
								<h3 className="box_title">{item.name.common}</h3>
								<p className="box_desc">
									Native Name:
									<span>{item.name.official}</span>
								</p>
								<p className="box_desc">
									Population:
									<span>{item.population}</span>
								</p>
								<p className="box_desc">
									Region:
									<span>{item.region}</span>
								</p>
								<p className="box_desc">
									Subregion:
									<span>{item.subregion}</span>
								</p>
								<p className="box_desc">
									Capital:
									<span>{item.capital}</span>
								</p>
								<div className="borders">
									Border Countries:
									{item.borders
										? item.borders.map((border, i) => {
											return  <button className="btn" key={i}>{border}</button> 
												// return  border.replace(border, arr[i])  ?  <button className="btn" key={i}>{arr[i]}</button>  : ''
										  })
										: <span className="ms-3">No borders</span>}
								</div>
							</div>
							<div className="box-right" key={3}>
								<p className="box_desc">
									Top Level Domain:
									<span>{item.tld[0]}</span>
								</p>
								<p className="box_desc">
									Currencies:
									{Object.values(item.currencies).map((currency) => {
										return <span key={"a"}>{currency.name}</span>;
									})}
								</p>
								<p className="box_desc">
									Languages:
									{Object.values(item.languages).map((lang, l) => {
										return <span key={l}>{lang}</span>;
									})}
								</p>
							</div>
						</div>
					))}
				</>
			</div>
		</div>
	);
}
