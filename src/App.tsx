import * as React from 'react'
import './App.scss';
import DashboardPage from './pages/dashboard/Dashboard';
import LoginPage from './pages/login/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Auth } from './contexts/auth-context'
import SignUpPage from './pages/signup/SignUp';
import { useProvideAuth } from './hooks/userProvideAuth';




function App() {
  const auth = useProvideAuth()

  // const currentUser = {
  //   auth: {
  //     user: {
  //       firstName: "Nacho",
  //       lastName: "Castillo"
  //     }
  //   }
  // }
  // const currentUserNull = {
  //   auth: {
  //     user: { firstName: "", lastName: "" }
  //   }
  // }
  // const providerValue = {
  //   // ...currentUser
  //   ...currentUserNull
  // }
  return (
    <Auth.Provider value={auth}>
      <BrowserRouter>
        <Switch>
          <Route path="/register">
            <SignUpPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <DashboardPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Auth.Provider>
    // <LoginPage />
    // <DashboardPage />
    // <div className="main">
    // </div>
  );
}

export default App;
