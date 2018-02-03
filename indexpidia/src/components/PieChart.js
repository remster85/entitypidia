import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';



export default class PieChart extends Component {

        render() {

            if(this.props.entityname){
            
                const entityname = this.props.entityname;
                const filename = entityname + 'composition.json';
                var values = require('./../jsonsamples/' + filename);
               
                var weights = Object.keys(values).map(function(k) { return values[k]['property5'] });
                var entitycomponents = Object.keys(values).map(function(k) { return values[k]['property1'] });
                
                var colors = ["red","green","orange","purple","black","pink","white","brown","amazon","amber","auburn","autumn","bazaar","beaver","bone","brandy","buff"];
                var hoverBackgroundColor = ["#0048BA","#B0BF1A","#7CB9E8","#C9FFE4","#B284BE","black","pink","white","brown"];
        
                const data = {
                    labels: entitycomponents,
                    datasets: [{
                        data: weights,
                        backgroundColor: colors,
                        hoverBackgroundColor : hoverBackgroundColor
                    }]
                };

                return (
                    <div>
                    <h2>{entityname} Breakdown</h2>
                    <Pie data={data} />
                    </div>
                );
                
            }else{
                return (<div></div>)
            }
        }
    }
        