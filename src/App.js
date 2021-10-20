import { Route, Switch } from "react-router-dom";
import RegisterPage from "./pages/Register/RegisterPage";
import RegisterProfilePage from "./pages/RegisterProfile/RegisterProfilePage";
import SimpleRegisterPage from "./pages/SimpleRegister/SimpleRegisterPage";
import StartingPage from "./pages/Starting/StartingPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={StartingPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/simple" component={SimpleRegisterPage} />
        <Route path="/profile" component={RegisterProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
