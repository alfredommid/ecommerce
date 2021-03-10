import React from 'react';
import panther from './assets/panther.svg'

const Home = () => {
    return ( 
        <div className="main container text-center mt-5">
            <img src={panther} className="panther" alt="logo-panther" />
            <h1>Bienvenido a deveeefe.chop</h1>
        </div>
     );
}
 
export default Home;