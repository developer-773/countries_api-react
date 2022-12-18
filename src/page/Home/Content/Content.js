import Countries from "./Country/Countries";
import "./Content.css"

export default function Content({data}) {
    return(
        <main>
            <section className="countries">
                <div className="container">
                    {<Countries data={data}/>}        
                </div>
            </section>
        </main>
    )
}