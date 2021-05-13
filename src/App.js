import {BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import AppContextProvider from './context/CartContext';

function App() {
  return (
    <div>
      <AppContextProvider>
      <BrowserRouter>
      <NavBar/>
      <h1>Bienvenidos a Burger Code</h1>
      <h2>En la sección Catálogo encontras nuestros productos</h2>
        <Switch>
        
          <Route exact path="/catalogo/:categoria">
          <ItemListContainer/>
          </Route>
          <Route exact path="/catalogo">
          <ItemListContainer/>
          </Route>
          
          <Route exact path="/item/:id">
          <ItemDetailContainer/>
          </Route>

        </Switch>
      </BrowserRouter>

      </AppContextProvider>
      
    </div>
  );
}

export default App;
