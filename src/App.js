import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import LogIn from "./components/LogIn/LogIn";
import { auth } from "./firebase/firebase.util";
import { useStateValue } from "./context/stateProvider";
import { actionTypes } from "./context/reducer";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userData) => {
      dispatch({ type: actionTypes.SET_USER, payload: userData });
      console.log(user);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <div className="App">
      {!user ? (
        <LogIn />
      ) : (
        <div>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Switch>
              <Route path="/room/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <h1>welcome</h1>
              </Route>
            </Switch>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
