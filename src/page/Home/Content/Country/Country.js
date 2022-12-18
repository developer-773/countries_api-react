import "./Country.css";
import { Link } from "react-router-dom";


export default function Country({img, name, population, region, capital, unique}) {

	return (
		<li className="country_item col-sm-8 col-lg-4 col-xl-4 mx-5 md-md-0">
			<img
				className="country_image"
				src={img}
				alt={name}
			/>
			<div className="position-absolute bottom-0 ps-4 pb-4 pe-4 w-100">
				<strong className="fs-3">{name}</strong>
				<p className="fw-bold mt-3">Population: <span className="fw-normal">{population}</span></p>
				<p className="fw-bold">Region: <span className="fw-normal">{region}</span></p>
				<p className="fw-bold">Capital: <span className="fw-normal">{capital}</span></p>
				<Link className="btn btn-primary" data-type={unique} to={`/CountryInfo/${unique}`}>More info</Link>
			</div>
		</li>
	);
}
