import {BrowserRouter, Switch, Route} from 'react-router-dom';

/** Pages Components **/
import Home from "./pages/home/Home";
import Create from "./pages/carete/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";

import './App.css'
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/create">
                        <Create/>
                    </Route>
                    <Route exact path="/search">
                        <Search/>
                    </Route>
                    <Route exact path="/recipes/:id">
                        <Recipe/>
                    </Route>
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App
