import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MovieForm from './components/MovieFrom'
import Movies from './components/Movies'
import ProfilePage from './components/ProfilePage'
import SignInPage from './components/SignInPage'

export default (
    <Switch>
        <Route exact path="/" component={Movies} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/signin" component={SignInPage} />
    </Switch>
)