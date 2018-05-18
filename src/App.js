import React, { Component } from 'react';
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
    	<div>
            <Sidebar />

            <main className='page__content'>
                <Navbar />

                <div className="container-fuild">
                    <div className="row">
                        <div className="container">

                        </div>
                    </div>
                </div>
            </main>
    	</div>
    );
  }
}

export default App;
