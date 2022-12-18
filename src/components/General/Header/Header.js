import "./Header.css"
export default function Header() {
	return (
		<header className="header ">
			<div className="header_box container">
                <a href="/#" className="logo">Where in the world?</a>
                <button className="header_btn" onClick={() => document.body.classList.toggle("theme-dark")}> Dark Mode</button>
            </div>
		</header>
	);
}
