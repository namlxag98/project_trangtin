import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link  
  } from "react-router-dom";
import News from '../components/News';
import Home from '../components/Home';
import Contact from '../components/Contact';
import NewDetail from '../components/NewDetail';


class DieuHuongURL extends Component {
    render() {
        return (
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/tin" component={News}></Route>
                        <Route path="/lien-he" component={Contact}></Route>
                        <Route path="/tin-tuc/:slug.:id.html" component={NewDetail}></Route>
                    </Switch>
                </div>
        );
    }
}

export default DieuHuongURL;