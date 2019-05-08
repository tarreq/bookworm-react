import React from 'react';
import { Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import SampleLogin from './components/pages/SampleLogin'

const App = () => <div className="ui container">
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/slogin" exact component={SampleLogin} />
</div>

export default App;
