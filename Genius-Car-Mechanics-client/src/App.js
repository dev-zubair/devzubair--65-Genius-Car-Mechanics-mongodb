import './App.css';
import Home from './Pages/Home/Home/Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound.js';
import Booking from "./../src/Pages/Booking/Booking.js";
import Header from './Pages/Shared/Header/Header.js';
import Login from './Pages/Login/Login/Login.js';
import AuthProvider from './contexts/AuthProvider.js';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute.js';
import AddServices from './Pages/AddServices/AddServices.js';
import ManageServices from './Pages/ManageServices/ManageServices.js';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/addservices">
              <AddServices></AddServices>
            </Route>

            <Route path="/manageservices">
              <ManageServices></ManageServices>
            </Route>


            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;



