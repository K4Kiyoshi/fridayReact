import React from "react";
import { BrowserRouter,Switch,Route,Redirect } from "react-router-dom";
import "./css/style.css";
// import Home from "./view/pages/home/homeIndex";
// import Profile from "./view/pages/profile/profieIndex"
// import Fruit from "./view/pages/fruit/fruitIndex";

const Home = React.lazy(() => import("./view/pages/home/homeIndex"))
const Profile = React.lazy(() => import("./view/pages/profile/profieIndex"))
const Fruit = React.lazy(() => import("./view/pages/fruit/fruitIndex"))
const App = () => {

const Loading = (
  <div>
    <h1>Loading</h1>
  </div>
);



  return(
<BrowserRouter>
<React.Suspense>
<Switch>
  <Route  exact path= "/" component={Home} />
  <Route  exact path= "/profile" component={Profile} />
  <Route  exact path= "/fruit" component={Fruit} />
  <Route>
    <Redirect to="/" />
  </Route>
</Switch>
</React.Suspense>

</BrowserRouter>

  )
}

export default App;
