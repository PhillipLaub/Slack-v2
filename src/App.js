import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />

              <Switch>
                <Route exact path="/">
                  <div className="welcome">
                    <div className="welcome__container">
                      <img
                        src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
                        alt="slack logo"
                      />
                      <h1>Welcome to Laubster HQ</h1>
                      <h4>Add a channel or join an existing room!</h4>
                    </div>
                  </div>
                </Route>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
              </Switch>

              {/* react router -> chat screen*/}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
