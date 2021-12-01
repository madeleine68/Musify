// import React , {Component, useState, useEffect} from 'react';

// import axios from 'axios';

// import Chart from 'react-apexcharts'

// export default function ApexChart2 ({ stats }) {
//     console.log("Object.values is what we need to replace data in series (line 9)", stats)
//     // const [data, setData] = useState ()    

//   const [category, setCategory] = useState([])
//   const [data, setData] = useState([])

//   useEffect(() => {
//       const age = [];
//       const salary = [];

//       axios.get("https://dummy.restapiexample.com/api/v1/employees").then(response =>{
//           console.log("response", response)
//           response.data.data.map(item => {
//             console.log("item", item)
//               age.push(item.employee_age);
//               salary.push(item.employee_salary)
//           })
//           setCategory(salary)
//           setData(age)
         
//           console.log("age", age, salary)
//       }).catch(e => {
//           alert(e);
//       })
//   }, [])
  
//     return (
//       <Chart options={{
//         chart: {
//           id: 'apexchart-example'
//         },
//         xaxis: {
//           categories: category
//         }
//       }} 
      
//       series={[{
//         name: 'series-1',
//         data: data
//       }]} type="line" width={800} height={500} />
      
//     )
    
// }



// /*
//         /*chart: {
//           type: 'polarArea',
//         },
//         stroke: {
//           colors: ['#fff']
//         },
//         fill: {
//           opacity: 0.8
//         },
//         responsive: [{
//           breakpoint: 480,
//           options: {
//             chart: {
//               width: 200
//             },
//             legend: {
//               position: 'bottom'
//             }
//           }
//         }]
//       });
    
    
    
  


  
//     return (
      
// <ReactApexChart options={opt} series={ser} type="polarArea" />



//     );
//   }
// */