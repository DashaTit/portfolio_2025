import React from 'react';
import Nav from "./Nav.jsx";
import Header from "./Header.jsx";
import Works from "./Works.jsx";
import Contacts from "./Contacts.jsx";
import Preloader from "./Preloader.jsx";

const Home = () => {
    return (
        <div>
            <Nav />
            <Header/>
            <main className="container">
                <Works/>
                <Contacts/>
            </main>
            <footer>
                <Nav />
            </footer>

        </div>
    );
};

export default Home;