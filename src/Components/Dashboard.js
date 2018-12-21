import React, {Component} from 'react';
import House from './House'
import Axios from 'axios';
import {Route} from 'react-router'

class Dashboard extends Component{
 
    state = {
        properties:[],
        
    }

    componentDidMount = ()=>{
        Axios.get(`/api/properties`).then(res=>
            this.setState({
                properties:res.data
            })
        )
    }




    render(){
        let renderProperties = this.state.properties.map((el,i)=>{return <h1 key={i}>{el}</h1>})
        return(
            <div>
                <button onClick={()=> <Route path='/Wizard'/>}>Add New Property</button> 
                {Dashboard}
                {renderProperties}
                <House />
            </div>

        )
    }
}

export default Dashboard;