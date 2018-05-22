import React, { Component } from 'react'

class SubHeader extends Component{

    render() {
        return(
            <div className="sub-header">
                <h2 className="title">Nouvel article</h2>

                <div className="buttons">
                    <a href="#" className="btn save">Sauvegarder</a>
                    <a href="#" className="btn cancel">Annuler</a>
                </div>
            </div>
        )
    }
}

export default SubHeader;