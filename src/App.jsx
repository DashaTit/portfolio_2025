import "./App.css";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Works from "./components/Works";

function App() {
    return (
        <>
            <Nav />
            <Header/>
            <main className="container">
                <Works/>
                <Contacts/>
            </main>
            <footer>
            <Nav />
            </footer>
        </>
    );
}

export default App;
