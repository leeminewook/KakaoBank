import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import MainPage from "./pages/Main/MainPage";
import RegisterPage from "./pages/Register/RegisterPage";
import RegisterFinalPage from "./pages/RegisterFinal/RegisterFinalPage";
import RegisterProfilePage from "./pages/RegisterProfile/RegisterProfilePage";
import SimpleLoginPage from "./pages/SimpleLogin/SimpleLoginPage";
import SimpleRegisterPage from "./pages/SimpleRegister/SimpleRegisterPage";
import StartingPage from "./pages/Starting/StartingPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={StartingPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/simpleregister" component={SimpleRegisterPage} />
        <Route path="/profile" component={RegisterProfilePage} />
        <Route path="/final" component={RegisterFinalPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/simplelogin" component={SimpleLoginPage} />
        <Route path="/main" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
