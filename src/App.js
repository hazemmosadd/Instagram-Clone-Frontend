import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux/store"; // Import the Redux store

// Main App entry
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <AppRoutes />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
