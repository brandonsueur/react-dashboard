import React, { Component } from 'react';
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import SubHeader from "./components/SubHeader/SubHeader";

class App extends Component {
  render() {
    return (
    	<div>
            <Sidebar />

            <main className='page__content'>
                <Navbar />

                <SubHeader />

                <div className="container-fuild">
                    <form action="#">
                        <input type="text" name="title" class="form title" placeholder="Titre de l'article"/>
                        <input type="text" name="sub-title" class="form subtitle" placeholder="Sous-titre"/>

                        <textarea name="content" cols="30" rows="10" class="form textarea" placeholder="Contenu de l'article..."></textarea>
                    </form>
                </div>
            </main>
    	</div>
    );
  }
}

export default App;
