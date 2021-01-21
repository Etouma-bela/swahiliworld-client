import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import VideoList from "./pages/VideoList";
import FormVideo from "./components/Forms/FormVideo";
import FormEditVideo from "./components/Forms/FormEditVideo";
import VideoCard from "./components/VideoCard";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/videos" component={VideoList} />
        <Route exact path="/videos/create" component={FormVideo} />
        <Route exact path="/videos/:id/edit" component={FormEditVideo} />
        <Route exact path="/videos/:id/details" component={VideoCard} />
        <Route exact path="/about" component={About} />
        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
