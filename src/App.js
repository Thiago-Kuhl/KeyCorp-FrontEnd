import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/login/login';
import Home from './pages/home/home'


ReactDOM.render(
    <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));


