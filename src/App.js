import {BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import AppContextProvider from './context/CartContext';
import Cart from './components/Cart';
import Homepage from './components/Homepage/homepage';
import Contactpage from'./components/ContactPage/contactpage';
import Infopage from './components/InfoPage/infopage';

function App() {
  return (
    <div>
      <AppContextProvider>
      <BrowserRouter>
      <NavBar/>
        <Switch> 
        <Route exact path="/">
          <Homepage/>
          </Route>
          <Route exact path="/Contacto">
          <Contactpage/>
          </Route>
          <Route exact path="/quienesSomos">
          <Infopage/> 
          </Route>
          <Route exact path="/catalogo/:categoria">
          <ItemListContainer/>
          </Route>
          <Route exact path="/catalogo">
          <ItemListContainer/>
          </Route>
          <Route exact path="/item/:id">
          <ItemDetailContainer/>
          </Route>
          <Route exact path="/cart">
          <Cart/>
          </Route>

        </Switch>
      </BrowserRouter>

      </AppContextProvider>
      
    </div>
  );
}

export default App;
