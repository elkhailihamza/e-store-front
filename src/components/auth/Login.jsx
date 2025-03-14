import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../axios-client";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 

    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosClient.post("/auth/login", {
                email: email,
                password: password,
            });
            console.log("Réponse:", response.data);
            navigate("/dashboard"); 
        } catch (err) {
            console.error("Erreur lors de la connexion:", err);
            setError("Email ou mot de passe incorrect."); 
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow">
                        <div className="card-header text-center bg-primary text-white">
                            <h4>Se Connecter</h4>
                        </div>
                        <div className="card-body">
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="loginEmail" className="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="loginEmail" 
                                        placeholder="Entrez votre email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="loginPassword" className="form-label">Mot de passe</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="loginPassword" 
                                        placeholder="Entrez votre mot de passe"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Se Connecter</button>
                            </form>
                            <p className="text-center mt-3">
                                Pas encore inscrit ? <Link to="/register">Créer un compte</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
