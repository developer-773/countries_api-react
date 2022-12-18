import Country from "./Country";

export default function Countries({ data }) {
	return (
		<>
			<ul className="countries_list  row g-0 gy-5 mx-auto d-flex justify-content-center justify-content-md-between my-5 ">
				{data.length ? (
					data?.map((country, i) => (
						<Country
							key={country.cca2}
							img={country.flags.png}
							name={country.name.common}
							population={country.population}
							region={country.region}
							capital={country.capital}
							unique={country.cca2}
						/>
					))
				) : (
					<h2 className="text-center">Not found</h2>
				)}
			</ul>
		</>
	);
}
