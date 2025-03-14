function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <div className="col-md-3 col-lg-2 d-md-block bg-dark sidebar" id="sidebar">
                    <div className="sidebar-header">
                        <h3>Dashboard</h3>
                    </div>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a href="#" className="sidebar-link active">
                                <i className="fas fa-tachometer-alt me-2"></i>
                                Tableau de bord
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="sidebar-link">
                                <i className="fas fa-users me-2"></i>
                                Utilisateurs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="sidebar-link">
                                <i className="fas fa-chart-bar me-2"></i>
                                Statistiques
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="sidebar-link">
                                <i className="fas fa-cog me-2"></i>
                                Paramètres
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="sidebar-link">
                                <i className="fas fa-question-circle me-2"></i>
                                Aide
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contenu principal */}
                <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="content">
                    {/* Navbar */}
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button type="button" id="sidebarCollapse" className="btn btn-dark d-md-none">
                                <i className="fas fa-bars"></i>
                            </button>
                            <div className="d-flex justify-content-between align-items-center w-100">
                                <h4 className="mb-0">Tableau de bord</h4>
                                <div className="dropdown">
                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-user me-2"></i>John Doe
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                        <li><a className="dropdown-item" href="#">Profil</a></li>
                                        <li><a className="dropdown-item" href="#">Paramètres</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Déconnexion</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* Contenu du dashboard */}
                    <div className="container-fluid mt-4">
                        <div className="row mb-4">
                            <div className="col-md-3 mb-3">
                                <div className="card bg-primary text-white">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 className="card-title">Utilisateurs</h6>
                                                <h2 className="mb-0">1,254</h2>
                                            </div>
                                            <i className="fas fa-users fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <div className="card bg-success text-white">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 className="card-title">Revenus</h6>
                                                <h2 className="mb-0">€8,350</h2>
                                            </div>
                                            <i className="fas fa-euro-sign fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <div className="card bg-warning text-white">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 className="card-title">Commandes</h6>
                                                <h2 className="mb-0">152</h2>
                                            </div>
                                            <i className="fas fa-shopping-cart fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <div className="card bg-danger text-white">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 className="card-title">Tickets</h6>
                                                <h2 className="mb-0">28</h2>
                                            </div>
                                            <i className="fas fa-ticket-alt fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tableau de données */}
                        <div className="card mb-4">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h5 className="mb-0">Liste des utilisateurs</h5>
                                <button className="btn btn-primary btn-sm">
                                    <i className="fas fa-plus me-1"></i> Ajouter
                                </button>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Nom</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Rôle</th>
                                                <th scope="col">Statut</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Jean Dupont</td>
                                                <td>jean.dupont@example.com</td>
                                                <td>Admin</td>
                                                <td><span className="badge bg-success">Actif</span></td>
                                                <td>
                                                    <button className="btn btn-sm btn-info me-1"><i className="fas fa-edit"></i></button>
                                                    <button className="btn btn-sm btn-danger"><i className="fas fa-trash"></i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Marie Martin</td>
                                                <td>marie.martin@example.com</td>
                                                <td>Utilisateur</td>
                                                <td><span className="badge bg-success">Actif</span></td>
                                                <td>
                                                    <button className="btn btn-sm btn-info me-1"><i className="fas fa-edit"></i></button>
                                                    <button className="btn btn-sm btn-danger"><i className="fas fa-trash"></i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Pierre Durand</td>
                                                <td>pierre.durand@example.com</td>
                                                <td>Utilisateur</td>
                                                <td><span className="badge bg-warning">En attente</span></td>
                                                <td>
                                                    <button className="btn btn-sm btn-info me-1"><i className="fas fa-edit"></i></button>
                                                    <button className="btn btn-sm btn-danger"><i className="fas fa-trash"></i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Sophie Bernard</td>
                                                <td>sophie.bernard@example.com</td>
                                                <td>Éditeur</td>
                                                <td><span className="badge bg-danger">Inactif</span></td>
                                                <td>
                                                    <button className="btn btn-sm btn-info me-1"><i className="fas fa-edit"></i></button>
                                                    <button className="btn btn-sm btn-danger"><i className="fas fa-trash"></i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>Michel Petit</td>
                                                <td>michel.petit@example.com</td>
                                                <td>Utilisateur</td>
                                                <td><span className="badge bg-success">Actif</span></td>
                                                <td>
                                                    <button className="btn btn-sm btn-info me-1"><i className="fas fa-edit"></i></button>
                                                    <button className="btn btn-sm btn-danger"><i className="fas fa-trash"></i></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-end">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Précédent</a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Suivant</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;