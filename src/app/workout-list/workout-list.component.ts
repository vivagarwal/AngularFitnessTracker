import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Workout } from '../workout.model';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  standalone:true,
  imports:[CommonModule,FormsModule]
})
// export class WorkoutListComponent implements OnInit {
//   workouts: Workout[] = [];
//   workoutTypes: string[] = [];
//   searchTerm: string = '';
//   selectedType: string = '';
//   paginatedWorkouts: Workout[] = [];
//   currentPage: number = 1;
//   pageSize: number = 5;

//   constructor(private workoutService: WorkoutService) {}

//   ngOnInit() {
//     this.workoutService.getWorkouts().subscribe(workouts => {
//       this.workouts = workouts;
//       this.workoutTypes = [...new Set(workouts.map(w => w.workoutType))];
//       this.updatePaginatedWorkouts();
//     });
//   }

//   get filteredWorkouts() {
//     return this.workouts
//       .filter(workout => workout.userName.toLowerCase().includes(this.searchTerm.toLowerCase()))
//       .filter(workout => !this.selectedType || workout.workoutType === this.selectedType);
//   }

//   updatePaginatedWorkouts() {
//     const start = (this.currentPage - 1) * this.pageSize;
//     const end = this.currentPage * this.pageSize;
//     this.paginatedWorkouts = this.filteredWorkouts.slice(start, end);
//   }

//   prevPage() {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//       this.updatePaginatedWorkouts();
//     }
//   }

//   nextPage() {
//     if (this.currentPage * this.pageSize < this.filteredWorkouts.length) {
//       this.currentPage++;
//       this.updatePaginatedWorkouts();
//     }
//   }
// }

export class WorkoutListComponent implements OnInit {
  workouts: Workout[] = [];
  filteredWorkouts: Workout[] = [];
  displayedWorkouts: Workout[] = [];
  searchUsername: string = '';
  filterType: string = '';
  workoutTypes = ['Running', 'Cycling', 'Yoga'];
  pageSize = 5;
  currentPage = 0;

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.workouts = this.workoutService.getWorkouts();
    this.applyFilters();
  }

  applyFilters() {
    this.filteredWorkouts = this.workoutService.searchWorkouts(this.searchUsername, this.filterType);
    this.paginate();
  }

  paginate(event?: PageEvent) {
    const pageIndex = event ? event.pageIndex : this.currentPage;
    const startIndex = pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedWorkouts = this.filteredWorkouts.slice(startIndex, endIndex);
  }
}

