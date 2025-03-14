import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../../axios-client'; 

function Register() {
    const [name, setName] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [adresse, setAdresse] = useState({
        rue: '',
        ville: '',
        codePostal: '',
        pays: ''
    });
    const [error, setError] = useState(null); 
    const [success, setSuccess] = useState(null); 
    const navigate = useNavigate(); 

    const handleChangeAdresse = (e) => {
        const { name, value } = e.target;
        setAdresse((prevAdresse) => ({
            ...prevAdresse,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const registrationData = {
            nom: name,
            prenom: prenom,
            email: email,
            password: password,
            addresses: [adresse]
        };
        try {
            const response = await axiosClient.post('/auth/register', registrationData);
            navigate("/login"); 
            console.log(response.data);
            setSuccess("Inscription réussie ! Vous pouvez vous connecter."); 
            setError(null);
        } catch (error) {
            console.error("Erreur lors de l'inscription:", error);
            setError(error.response?.data?.message || "Une erreur s'est produite lors de l'inscription.");
            setSuccess(null);
        }
        
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow">
                        <div className="card-header text-center bg-primary text-white">
                            <h4>S'inscrire</h4>
                        </div>
                        <div className="card-body">
                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 row">
                                    <div className="col">
                                        <label htmlFor="registerName" className="form-label">Nom</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="registerName" 
                                            placeholder="Entrez votre nom" 
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="registerPrenom" className="form-label">Prénom</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="registerPrenom" 
                                            placeholder="Entrez votre prénom" 
                                            value={prenom}
                                            onChange={(e) => setPrenom(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="registerEmail" className="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="registerEmail" 
                                        placeholder="Entrez votre email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="registerPassword" className="form-label">Mot de passe</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="registerPassword" 
                                        placeholder="Entrez votre mot de passe"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3 row">
                                    <div className="col">
                                        <label htmlFor="registerRue" className="form-label">Rue</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="registerRue" 
                                            name="rue"
                                            placeholder="Entrez votre rue"
                                            value={adresse.rue}
                                            onChange={handleChangeAdresse}
                                            required
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="registerVille" className="form-label">Ville</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="registerVille" 
                                            name="ville"
                                            placeholder="Entrez votre ville"
                                            value={adresse.ville}
                                            onChange={handleChangeAdresse}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className="col">
                                        <label htmlFor="registerCodePostal" className="form-label">Code Postal</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="registerCodePostal" 
                                            name="codePostal"
                                            placeholder="Entrez votre code postal"
                                            value={adresse.codePostal}
                                            onChange={handleChangeAdresse}
                                            required
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="registerPays" className="form-label">Pays</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="registerPays" 
                                            name="pays"
                                            placeholder="Entrez votre pays"
                                            value={adresse.pays}
                                            onChange={handleChangeAdresse}
                                            required
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">S'inscrire</button>
                            </form>
                            <p className="text-center mt-3">
                                Déjà inscrit ? <Link to="/login">Se connecter</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
