import React, { Component } from 'react'

class Sidebar extends Component{

    render() {
        return(
            <sidebar>
                <div className="logo">
                    <a href="/">
                        Dashboard <span>:.</span>
                    </a>
                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fas fa-users"></i>
                                <span>Utilisateurs</span>
                            </a>

                            <span className="count">3</span>
                        </li>
                        <li className="active">
                            <a href="#">
                                <i className="fas fa-book-open"></i>
                                <span>Articles</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-chart-pie"></i>
                                <span>Statistiques</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-cogs"></i>
                                <span>Paramètres</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </sidebar>
        )
    }
}

export default Sidebar;