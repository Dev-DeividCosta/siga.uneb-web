import { Link } from "react-router-dom";
import '../styles/Sidebar.css'

export function Sidebar () {
    return <div className="sidebar">
        <Link to="/">
            <h1>Página Inicial</h1>
        </Link>

        <Link to="/sobre">
            <h1>Sobre</h1>
        </Link>
    </div>
}