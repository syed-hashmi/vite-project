import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axitInstance.js";
import { useDispatch } from "react-redux";
import { setUser } from "../../../util/createSlice.jsx";    

export default function login() {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();


    // const UserContext = createContext(false);

    function handleChange(e) {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    }

    const handleSubmit = async (e) => {
        debugger;
        e.preventDefault();
        try {
            let user = await api.post("/auth/login", { username: formData.username, password: formData.password });
            dispatch(setUser(user.data)); // ✅ store user in redux

            navigate("/dashboard"); // ✅ redirect to dashboard (home)

        } catch (err) {
        }
    };

    return (
        <div className="login-body">
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                <p className="login-subtitle">Access your medical dashboard</p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        id="username"
                        type="text"
                        placeholder="username"
                        className="login-input"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="login-input"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="login-button">
                        Sign In
                    </button>
                </form>
                <p className="login-footer">Forgot your password?</p>
            </div>
        </div>
    );
}
