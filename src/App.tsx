import React from 'react';
import {Router} from '@reach/router'
import {Route} from './routes/Route'
import router from './routes/index'
/*Components */
import {NavBar} from "./components/NavBarModule"
/*Pages */
import {Home} from './pages/Home'
import {Edit} from './pages/Edit'
import {Profile} from './pages/Profile'
import {Add} from './pages/Add'
/*Styles */
import {GlobalStyle} from './styles/GlobalStyles'


const App: React.FC = () => {
  return (
    <>
      <NavBar></NavBar>
      <Router>
        <Route component={Home} path={router.home}/>
        <Route component={Edit} path={router.edit}/>
        <Route component={Profile} path={router.profile}/>
        <Route component={Add} path={router.add}/>
      </Router>
      <GlobalStyle></GlobalStyle>
    </>
  );
};

export default App;
