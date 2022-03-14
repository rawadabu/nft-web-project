import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Release from "./components/Release";
import RollToTop from "./components/RollToTop";
import SuperRare from "./components/SuperRare";
import scrollreveal from "scrollreveal";
import Market from "./components/Market"
import { AuthProvider } from "./authContext/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./components/DashBoard"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
import { Container } from "react-bootstrap"
import Signup from "./components/SignUp"

import "./css_files/index.scss";

function App() {


  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
          nav,
          .home,
          .super-rare,
          .releases,
          footer
      `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {

    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);

  return (
    /*react-router-dom @5 used */
    <Router>
      <div className="app-container">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <RollToTop />
            <Home />
            <SuperRare />
            <Release />
          </Route>
          <Route path="/home">
            <RollToTop />
            <Home />
            <SuperRare />
            <Release />
          </Route>
          <Route path="/login" component={Login} >
            <Container
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "100vh" }}
            >
              <div className="" >
                <Router>
                  <AuthProvider>
                    <Switch>
                      <PrivateRoute exact path="/market" component={Market} />
                      <PrivateRoute path="/update-profile" component={UpdateProfile} />
                      <PrivateRoute path="/dashboard" component={Dashboard} />
                      <Route path="/signup" component={Signup} />
                      <Route path="/login" component={Login} />
                      <Route path="/forgot-password" component={ForgotPassword} />
                    </Switch>
                  </AuthProvider>
                </Router>
              </div>
            </Container>
          </Route>
          <Route path="/signup" >
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;