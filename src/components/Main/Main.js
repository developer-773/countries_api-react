import Countries from "./Country/Countries";
// import Form from "../Form/Form";


export default function Main({data}) {
    return(
        <main>
            <section className="countries">
                <div className="container">
                    <Countries data={data}/>
                </div>
            </section>
        </main>
    )
}