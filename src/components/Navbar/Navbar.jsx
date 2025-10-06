import "./Navbar.css";
import { Link } from "react-router";


const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo">MediTrack</div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Inventory</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </nav>
            <div className="overlay">
                <div className="welcome-card">
                    <h1>Welcome to</h1>
                    <h2>Medicine Inventory System</h2>
                    <p>Your smart companion in managing medical supplies</p>
                    <a href="dashboard.html" className="enter-btn">Enter Dashboard</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;