// import { Component, OnInit } from '@angular/core';
// import { Chart, registerables } from 'chart.js';
// import { WorkoutService } from '../workout.service';
// import { Workout } from '../workout.model';

// @Component({
//   selector: 'app-workout-chart',
//   templateUrl: './workout-chart.component.html',
//   standalone:true
// })
// export class WorkoutChartComponent implements OnInit {
//   private chart!: Chart;

//   constructor(private workoutService: WorkoutService) {}

//   ngOnInit() {
//     this.workoutService.getWorkouts().subscribe(workouts => {
//       const workoutTypes = [...new Set(workouts.map(w => w.workoutType))];
//       const minutesByType = workoutTypes.map(type => {
//         return workouts.filter(w => w.workoutType === type)
//                        .reduce((total, w) => total + w.minutes, 0);
//       });

//       this.createChart(workoutTypes, minutesByType);
//     });
//   }

//   createChart(labels: string[], data: number[]) {
//     if (this.chart) {
//       this.chart.destroy();
//     }

//     this.chart = new Chart('workoutChart', {
//       type: 'bar',
//       data: {
//         labels: labels,
//         datasets: [{
//           label: 'Workout Minutes by Type',
//           data: data,
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//   }
// }
