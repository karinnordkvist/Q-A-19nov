import React from 'react';
import { Doughnut } from 'react-chartjs-2' // Here you import the chart you want to use

export const ChartCanvas = ({ completed, incomplete }) => {
  // This entire piece was copied from the cheat sheet.
  const state = {
    labels: ['Completed', 'Incomplete'],
    datasets: [
      {
        label: 'Task Status',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: [completed, incomplete]
      }
    ]
  }
  // end of copied code

    return (
    <div style={{width: '500px', margin: '50px auto'}}>
        
        {/* This was also copied from the cheat sheet.
            Just pick whatever style you want to use, 
            and change values as you go */}
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

      </div>
      )
}