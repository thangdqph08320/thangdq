import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
// import Home from '../../components/Main/Home'
import Navbar from '../../components/Main/NavBar';
import '../.././assets/css/main/owl.css';
import '../.././assets/css/main/fontawesome.css';
import '../.././assets/css/main/templatemo-sixteen.css';
import '../.././assets/css/main/flex-slider.css';
// import '../.././assets/css/images'

export default ({ children }) => {

    console.log('render Main')

    return (
        <div className="user-page">
            <Header />
            <Navbar />
            <div className="content">
                {children}

            </div>
            <Footer />
        </div>
    )
}
