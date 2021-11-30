import React from "react";

import { useState } from 'react';
import ApexCharts from 'apexcharts'
import ReactApexChart from "react-apexcharts";

export default function ApexChart ({ stats }) {
    console.log("Object.values is what we need to replace data in series (line 9)",stats)
    // const [data, setData] = useState ()    

    const [ series, setSeries ] = useState( [30.7, 62.5, 66.2, 10.7, 49.6] );
    const [ options, setOptions ] = useState
     ({
          chart: {
            height: 390,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              offsetY: 0,
              startAngle: 0,
              endAngle: 270,
              hollow: {
                margin: 5,
                size: '30%',
                background: 'transparent',
                image: undefined,
              },
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  show: false,
                }
              }
            }
          },
          colors: ['#FF75A0', '#F7EA00', '#77E4D4', '#0077B5', '#998CEB'],
          labels: ['acousticness', 'danceability', 'energy', 'instrumentalness','valence'],
          legend: {
            show: true,
            floating: true,
            fontSize: '16px',
            position: 'left',
            offsetX: 160,
            offsetY: 15,
            labels: {
              useSeriesColors: true,
            },
            markers: {
              size: 0
            },
            formatter: function(seriesName, opts) {
              return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            },
            itemMargin: {
              vertical: 3
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              legend: {
                  show: false
              }
            }
          }]
        });

    
      return (
       
        <ReactApexChart options={options} series={series} type="radialBar" height={490}/>
     
      )

}    



