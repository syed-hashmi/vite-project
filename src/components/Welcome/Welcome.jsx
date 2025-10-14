import { useNavigate } from "react-router-dom";
import "./Welcome.css";

export default function Welcome() {
    const navigate = useNavigate();

    function navigateTo() {
        navigate("/login");
    }
    return (
        <div className="background">
            <div className="overlay">
                <div className="welcome-card">
                    <h1>Welcome to</h1>
                    <h2>Medicine Inventory System</h2>
                    <p>Your smart companion in managing medical supplies</p>
                    <a className="enter-btn" onClick={navigateTo}>Login</a>
                </div>
            </div>
        </div>
    )
}
