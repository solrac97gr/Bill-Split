import React, { useState } from "react";
import { Router } from "@reach/router";
import { Route } from "./routes/Route";
import router from "./routes/index";
/*Components */
import { NavBar } from "./components/NavBarModule";
/*Pages */
import { Home } from "./pages/Home";
import { Edit } from "./pages/Edit";
import { Profile } from "./pages/Profile";
import { Add } from "./pages/Add";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
/*Styles */
import { GlobalStyle } from "./styles/GlobalStyles";

const App: React.FC = () => {
  const [isAuth] = useState(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      return true;
    }
    return false;
  });
  const UsserLogged = ({ children}:any) => {
    return children({ isAuth: isAuth});
  };
  return (
    <>
      <NavBar></NavBar>
      <UsserLogged>{
        ({isAuth}:any)=>isAuth?
        <Router>
          <Route component={Home} path={router.home} />
          <Route component={Edit} path={router.edit} />
          <Route component={Profile} path={router.profile} />
          <Route component={Add} path={router.add} />
          <Route component={Login} path={router.login} />
          <Route component={Register} path={router.register} />
        </Router>
        :
        <Router>
          <Route component={Profile} path={router.home} />
          <Route component={Profile} path={router.edit} />
          <Route component={Profile} path={router.profile} />
          <Route component={Profile} path={router.add} />
          <Route component={Profile} path={router.login} />
          <Route component={Profile} path={router.register} />
        </Router>}
      </UsserLogged>

      <GlobalStyle></GlobalStyle>
    </>
  );
};

export default App;
