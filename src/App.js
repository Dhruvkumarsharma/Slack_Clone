import React, { useContext } from "react";
import Header from "./Components/Header";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Components/Chat";
import Login from "./Components/Login";
import { connect } from "react-redux";
import store from "./Context/AuthProvider";


function App({user}) {
  console.log(user);
  return (

    <div className="App">
      <Router>
        { user == null ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat />
                </Route>
              </Switch>
            </div>
          </>
         )
        }
      </Router>
    </div>
  );
}
const mapStateToProps = (store) => {
  return store;
}



export default connect(mapStateToProps,)(App);
