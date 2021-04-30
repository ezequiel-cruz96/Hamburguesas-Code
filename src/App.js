import {BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js'
import HomePage from'./Paginas/HomeContainer'
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer'


function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <h1>Bienvenidos a Burger Code</h1>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>

          <Route exact path="/category/:id">
          <ItemListContainer/>
          </Route>
          <Route exact path="/item/:id">
          <ItemDetailContainer/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
