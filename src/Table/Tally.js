import React, { Component } from 'react'
import './Tally.css'
import FlexLayout from "flexlayout-react";

class Tally extends Component{
    constructor(props){
        super(props)
        this.state={
            status:[]
        }
    }

    async componentDidMount(){
        const url="https://api.covid19india.org/data.json";
        const response =await fetch(url);
        const data =await response.json();
       // console.log(data.statewise);
        this.setState({status : Object.entries(data.statewise)});
        //this.setState({status :Object.defineProperties(data.statewise)})
        //console.log(this.state.status);
        //console.log(this.state.status[0][1]);

    }
    render(){
        return(
                <table align='center'>
                    <tr>
                        <th>sr no</th>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        </tr>
                        {this.state.status.map((list,index)=>
                        (
                            <tr>
                                <td>{index=index+1}</td>
                             <td >{list[1].state}</td>
                        <td>{list[1].confirmed}</td>
                        <td>{list[1].active}</td>
                        <td>{list[1].recovered}</td>
                        <td>{list[1].deaths}</td>
                        
                            </tr>
                        ))}
                        <tr>
                            
                        </tr>
                </table>

        );
    }

}
export default Tally;