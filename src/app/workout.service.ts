import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Workout } from './workout.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class WorkoutService {
//   private workouts: Workout[] = [];
//   private workoutsSubject = new BehaviorSubject<Workout[]>(this.workouts);

//   // Add a workout to the list and update the subject
//   addWorkout(workout: Workout) {
//     this.workouts.push(workout);
//     console.log('Workout added:', workout);
//     console.log('Current workouts:', this.workouts);
//     this.workoutsSubject.next([...this.workouts]); // Spread the array to trigger changes
//   }

//   // Return the observable of workouts
//   getWorkouts(): Observable<Workout[]> {
//     console.log(this.workoutsSubject);
//     return this.workoutsSubject.asObservable();
//   }
// }

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private storageKey = 'workouts';
  private workouts: Workout[] = [];

  constructor() {
    const storedWorkouts = localStorage.getItem(this.storageKey);
    this.workouts = storedWorkouts ? JSON.parse(storedWorkouts) : [
      { id: 1, userName: 'John Doe', workoutType: 'Running', minutes: 30, date: new Date() },
      { id: 2, userName: 'Jane Smith', workoutType: 'Cycling', minutes: 45, date: new Date() },
      { id: 3, userName: 'Alice Johnson', workoutType: 'Yoga', minutes: 60, date: new Date() }
    ];
    this.saveWorkouts();
  }

  private saveWorkouts() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.workouts));
  }

  getWorkouts() {
    return this.workouts;
  }

  addWorkout(workout: Workout) {
    workout.id = this.workouts.length + 1;
    workout.date = new Date();
    this.workouts.push(workout);
    this.saveWorkouts();
  }

  searchWorkouts(username: string, workoutType: string) {
    return this.workouts.filter(workout => {
      return (!username || workout.userName.toLowerCase().includes(username.toLowerCase())) &&
             (!workoutType || workout.workoutType.toLowerCase() === workoutType.toLowerCase());
    });
  }
}

