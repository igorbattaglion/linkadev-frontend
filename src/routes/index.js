import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'


const Routes = () => (
    <>
    <Navbar />
    <div className="content-master">
        <div className="container-main">
        <div className="content">
            <Switch>
                <Route exact path='/' component={Home}  />
            </Switch>
        </div>
        </div>
    </div>
    </>
)


export default Routes
