import React, {Component} from 'react';
import {Route} from 'react-router';


class Wizard extends Component{
    state = {
        name:'',
       address:'',
       city:'',
       state:'',
       zip:0,

        
    }

    handleName(value){
        this.setState({
            name:value
        })
    }

    handleAddress(value){
        this.setState({
            address:value
        })
    }


    handleCity(value){
        this.setState({
            city:value
        })
    }


    handleState(value){
        this.setState({
            state:value
        })
    }


    handleZip(value){
        this.setState({
            Zip:value
        })
    }


   


 




    render(){
        return(
            <div>
                <input onChange={(e)=>this.handleName(e.target.value)}  placeholder='Property Name'/>
                <input onChange={(e)=>this.handleAddress(e.target.value)}  placeholder='Address'/>
                <input onChange={(e)=>this.handleCity(e.target.value)}  placeholder='City'/>
                <input onChange={(e)=>this.handleState(e.target.value)}  placeholder='State'/>
                <input onChange={(e)=>this.handleZip(e.target.value)}  placeholder='Zip'/>
                <button onClick={()=> <Route exact path ='/'/>}>Cancel</button>

                Wizard
            </div>
        )
    }
}

export default Wizard;