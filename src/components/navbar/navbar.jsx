import { useDispatch } from "react-redux";
import "./Navbar.css";
import { clearUser } from "../../../util/createSlice.jsx";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";

export const Navbar = () => {
    const navigate = useNavigate();
    const userData = useSelector((state) => state.user);

    let dispatch = useDispatch();
    let logout = () => {
        dispatch(clearUser());
        navigate("/login");
    }
    return (
        <>
            <nav className="navbar">
                <div className="logo">MediTrack</div>
                <ul className="nav-links">
                    <Link to="home"><li>Home</li></Link>
                    <Link to="addMedicine"><li>Add Medicine</li></Link>

                    <li><a href="#">Inventory</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a onClick={() => {
                        logout();
                    }}>Logout</a></li>
                </ul>
            </nav>

        </>
    );
}; 