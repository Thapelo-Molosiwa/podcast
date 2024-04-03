import React, { useState } from "react";
import SigninForm from "../components/Login Form/Form";
import Middle from "../components/Context/Middle";
import { BrowserRouter as Router, Route} from 'react-router-dom';

import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.6.0/cdn/');



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleSignIn = (email, password) => {
     if (email === "user@example.com" && password === "password") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };
  return (
    <Router>
      
      <div className="App">
      {isAuthenticated ? (
        <Middle />
      ) : (
        <SigninForm onSignIn={handleSignIn} />
      )}
    </div>
      
    </Router>
  );
}
export default App;
