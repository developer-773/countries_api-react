import Content from "./Content/Content";
import Form from "./Form/Form";

export default function Home({searchCountries,searchCountriesBySelect,data}) {
    return(
        <>
        <Form searchCountries={searchCountries} searchCountriesBySelect={searchCountriesBySelect} />
        <Content data={data} />
        </>
    )
}