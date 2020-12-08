import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Footer from "./Pages/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
