import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Login from "./pages/Login";
import SingleVideoPage from "./pages/SingleVideoPage";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/videos">
        <Videos />
      </Route>
      <Route exact path="/videos/:id">
        <SingleVideoPage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}
