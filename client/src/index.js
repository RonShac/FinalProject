import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";

// const onRedirectCallback = (appState) => {
//   history.push(
//     appState && appState.returnTo ? appState.returnTo : window.location.pathname
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain="dev-33djnq0y6i5zuuh0.us.auth0.com"
        clientId="WBuEUeRx6oF66i4fhdSBUOj7BdSxKRzh"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </Router>
  </React.StrictMode>
);

export default App;
