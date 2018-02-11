import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';


export default class PieChart extends Component {

        render() {

            if(this.props.entityname){
            
                const entityname = this.props.entityname;
                const filename = entityname + 'composition.json';
                var values = require('./../jsonsamples/' + filename);

                console.log(values);
               
                var groupedByCommos = [];

                values.reduce(function (res, value) {
                    if (!res[value.property1]) {
                        res[value.property1] = {
                            property5: 10,
                            property1: value.property1
                        };
                        groupedByCommos.push(res[value.property1])
                    }
                    res[value.property1].property5 += value.property5
                    return res;
                }, {});
                 
                var weights = Object.keys(groupedByCommos).map(function(k) { return groupedByCommos[k]['property5'] });
                var entitycomponents = Object.keys(groupedByCommos).map(function(k) { return groupedByCommos[k]['property1'] });
                
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
        