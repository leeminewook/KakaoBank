import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LoginPage from "./pages/Login/LoginPage";
import MainPage from "./pages/Main/MainPage";
import MakeCardAgreePage from "./pages/MakeCardAgree/MakeCardAgreePage";
import MakeCardInfoPage from "./pages/MakeCardInfo/MakeCardInfoPage";
import MakeCardNickPage from "./pages/MakeCardNick/MakeCardNickPage";
import MakeCardPasswordPage from "./pages/MakeCardPassword/MakeCardPasswordPage";
import MakeCardSuccessPage from "./pages/MakeCardSuccess/MakeCardSuccessPage";
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
      <ToastContainer />
      <Router>
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
          <Route exact path="/makecard" component={MakeCardInfoPage} />
          <Route path="/makecard/nick" component={MakeCardNickPage} />
          <Route path="/makecard/password" component={MakeCardPasswordPage} />
          <Route path="/makecard/success" component={MakeCardSuccessPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
