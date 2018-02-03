import React, { Component } from 'react';
import { Pie } from 'react-chartjs';

export default class PieChart1 extends Component {


    render() {

        if(this.props.entityname){
            
            const pieData = [
                {
                    value: 300,
                    color:"#F7464A",
                    highlight: "#FF5A5E",
                    label: "Red"
                },
                {
                    value: 50,
                    color: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "Green"
                },
                {
                    value: 100,
                    color: "#FDB45C",
                    highlight: "#FFC870",
                    label: "Yellow"
                }
            ];
            return <Pie data={pieData} />;
        }else{
            return (<div></div>)
        }
    }
}