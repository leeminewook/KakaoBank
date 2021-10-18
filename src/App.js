import { Route, Switch } from "react-router-dom";
import RegisterPage from "./pages/Register/RegisterPage";
import SimpleRegisterPage from "./pages/SimpleRegister/SimpleRegisterPage";
import StartingPage from "./pages/Starting/StartingPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={StartingPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/simple/register" component={SimpleRegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
