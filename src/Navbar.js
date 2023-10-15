import { Link } from "react-router-dom";

const Narbar = () => {
    return (
        <nav className="navbar">
            <h1>The Kenny Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Narbar;