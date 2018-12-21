import Dash from './Components/Dashboard';
import Wizard from './Components/Wizard';
import {Switch,Route} from 'react-router-dom';
import React from 'react';


  const routes = ( 

        <Switch>
            <Route exact path='/' component={Dash}/>
            {/* <Route path ='/Wizard' component={Wizard}/> */}
        </Switch>
        )

        export default routes;