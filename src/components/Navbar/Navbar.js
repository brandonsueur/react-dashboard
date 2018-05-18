import React, { Component } from 'react'

class Navbar extends Component{

    render() {
        return(
            <header className="navbar">

                <ul className="navbar-right">
                    <li className="navbar-profile">
                        <a href="/">Brandon Sueur</a>
                    </li>

                    <li className="navbar-visitwebsite">
                        <a className='btn-visit-website' href="/">Visiter le site</a>
                    </li>
                </ul>

            </header>
        )
    }
}

export default Navbar;