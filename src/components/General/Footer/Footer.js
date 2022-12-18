import "./Footer.css"

export default function Footer() {
    return (
        <footer className="p-4">
            <div className="container">
                <p className="text-center fw-4">© {new Date().getFullYear()} developer_773. All rights reserved.</p>
            </div>
        </footer>
    )
}