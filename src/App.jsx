import "./App.css";
import React, {Suspense} from "react";
import Preloader from "./components/Preloader.jsx";

const LazyComponent = React.lazy(() => import('./components/Home.jsx'));
function App() {
    return (
        <div>
            <Suspense fallback={<Preloader />}>
                <LazyComponent />
            </Suspense>
        </div>
    );
}

export default App;
