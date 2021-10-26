import { Route, Switch } from "react-router-dom";
import TakeMoney from "./components/TakeMoney/TakeMoney";
import LoginPage from "./pages/Login/LoginPage";
import MainPage from "./pages/Main/MainPage";
import RegisterPage from "./pages/Register/RegisterPage";
import RegisterFinalPage from "./pages/RegisterFinal/RegisterFinalPage";
import RegisterProfilePage from "./pages/RegisterProfile/RegisterProfilePage";
import SimpleLoginPage from "./pages/SimpleLogin/SimpleLoginPage";
import SimpleRegisterPage from "./pages/SimpleRegister/SimpleRegisterPage";
import StartingPage from "./pages/Starting/StartingPage";
import TakeMainPage from "./pages/TakeMain/TakeMainPage";
import TakeMoneyPage from "./pages/TakeMoney/TakeMoneyPage";
import TakePasswordPage from "./pages/TakePassword/TakePasswordPage";

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
        <Route exact path="/take" component={TakeMainPage} />
        <Route path="/take/money" component={TakeMoneyPage} />
        <Route path="/take/password" component={TakePasswordPage} />
      </Switch>
    </div>
  );
}

export default App;
