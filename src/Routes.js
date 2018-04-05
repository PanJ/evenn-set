import React from 'react'
import { Route } from 'react-router-dom'
import Register from './features/register/Register'

const Home = () => <div>Home</div>
const Success = () => <div>Success</div>

export default () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/success" component={Success} />
  </div>
)
