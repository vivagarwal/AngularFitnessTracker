import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Workout } from './workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: Workout[] = [];
  private workoutsSubject = new BehaviorSubject<Workout[]>(this.workouts);

  // Add a workout to the list and update the subject
  addWorkout(workout: Workout) {
    this.workouts.push(workout);
    console.log('Workout added:', workout);
    console.log('Current workouts:', this.workouts);
    this.workoutsSubject.next([...this.workouts]); // Spread the array to trigger changes
  }

  // Return the observable of workouts
  getWorkouts(): Observable<Workout[]> {
    console.log(this.workoutsSubject);
    return this.workoutsSubject.asObservable();
  }
}

