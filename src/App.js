// import React from "react";
// import { BrowserRouter,Switch,Route,Redirect } from "react-router-dom";
// import "./css/style.css";
// import Home from "./view/pages/home/homeIndex";
// import Profile from "./view/pages/profile/profieIndex"
// import Fruit from "./view/pages/fruit/fruitIndex";

// const Home = React.lazy(() => import("./view/pages/home/homeIndex"))
// const Profile = React.lazy(() => import("./view/pages/profile/profieIndex"))
// const Fruit = React.lazy(() => import("./view/pages/fruit/fruitIndex"))
// const App = () => {

// const Loading = (
//   <div>
//     <h1>Loading</h1>
//   </div>
// );



//   return(
// <BrowserRouter>
// <React.Suspense>
// <Switch>
//   <Route  exact path= "/" component={Home} />
//   <Route  exact path= "/profile" component={Profile} />
//   <Route  exact path= "/fruit" component={Fruit} />
//   <Route>
//     <Redirect to="/" />
//   </Route>
// </Switch>
// </React.Suspense>

// </BrowserRouter>

//   )
// }

// export default App;

import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./view/pages/home/homeIndex";
//import AboutUs from "./view/pages/aboutus/aboutus";
// import Register from "./view/pages/register/register";
// import Navbar from "./view/pages/nav/nav";
// import EmployeeList from "./view/pages/employeeList/employeeList";
import { Redirect } from "react-router-dom";
const Home = React.lazy(() => import("./view/pages/home/homeIndex"))
const AboutUs = React.lazy(() => import("./view/pages/aboutus/aboutus"))
const Register = React.lazy(() => import("./view/pages/register/register"))
const Navbar= React.lazy(() => import("./view/pages/nav/nav"))
const EmployeeList= React.lazy(() => import("./view/pages/employeeList/employeeList"))
const Error404= React.lazy(() => import("./view/pages/error404/error404"))
const Show= React.lazy(() => import("./view/pages/show/show"))


function App() {
  return (
    <Router>
      <Navbar />
      <React.Suspense>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/register" component={Register} />
        <Route path="/employeeList" component={EmployeeList} /> 
        <Route path="/show" component={Show} />
        <Route path="/error404" component={Error404} />
        <Route>
        <Redirect to="/error404"/>
        </Route>
      </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;

