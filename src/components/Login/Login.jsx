import "./Login.css";
import { useState } from "react";
import { useAuth } from "../../authContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "../../authContext/AuthContext";
 

export default function Login() {
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate(); 

    // const UserContext = createContext(false);

    function handleChange(e) {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    }

    // function handleSubmit(e) {
    //     debugger;
    //     e.preventDefault();
    //     // Use email and password as needed  
    //     axios.post("http://localhost:2000/api/auth/login",
    //         {
    //             username: formData.username,
    //             password: formData.password,
    //         }
    //         , { withCredentials: true }) // if you need cookies
    //         .then(res => {
    //             debugger;
    //             // UserContext.Provider.value = true;
    //             console.log(res.data)
    //         })
    //         .catch(err => console.error(err));
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData.username, formData.password);
            alert("Logged in!");
            navigate("/dashboard"); // ✅ redirect to dashboard (home)

        } catch (err) {
            alert("Login failed");
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
