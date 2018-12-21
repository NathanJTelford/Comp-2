import Dash from './Components/Dashboard';
import Wizard from './Components/Wizard';
import {Switch,Router} from 'react-router';


  const routes = ( 

        <Switch>
            <Router exact path='/' component={Dash}/>
            <Router path ='/Wizard' component={Wizard}/>
        </Switch>
        )

        export default routes;