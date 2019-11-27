import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import {Home} from '../pages/Home'
import Hackathons from '../pages/Hackathons'


const Routes = () => (
    <>
    {/* <Navbar /> */}
    <div className="content-master">
        <div className="container-main">
        <div className="content">
            <Switch>
                <Route exact path='/' component={Home}  />
                <Route exact path='/Hackathons' component={Hackathons}  />
            </Switch>
        </div>
        </div>
    </div>
    </>
)


export default Routes
