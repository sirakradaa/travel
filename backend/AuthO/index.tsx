import React from "react";
import ReactDOM from "react-dom";
import App from "../../src/App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-irvftnvvi145qgpa.us.auth0.com"
    clientId="ZhXgrQeFzaYGDY1QhNwGfw5dIhze3feO"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);