import Country from "./Country";

export default function Countries({data}) {

	return (
		<div>
			<ul className="countries_list  row g-0 gy-5 mx-auto d-flex justify-content-between mt-5">
				{data.length ? data.map((country) => (
					<Country key={country.cca2} 
          img={country.flags.png}
          name={country.name.common} 
          population={country.population}
          region={country.region}
          capital={country.capital}/>
				) ) : <h3>Nothing found</h3>}
			</ul>
		</div>
	);
}
