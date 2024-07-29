import { Component } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { FormsModule } from '@angular/forms';
import { Workout } from '../workout.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  standalone: true,
  imports: [FormsModule],
})
export class UserFormComponent {
  
  constructor(private workoutService: WorkoutService) {}

  onSubmit(form: any) {
      const newWorkout = {
        id:0,
        date:new Date(),
        userName: form.value.userName,
        workoutType: form.value.workoutType,
        minutes: form.value.minutes,
      };

      console.log(form.value.userName);
      console.log(form.value.workoutType);
      console.log(form.value.minutes);
      console.log(newWorkout);
      this.workoutService.addWorkout(newWorkout);
      form.reset();
  }

  // username: string = '';
  // workoutType: string = '';
  // minutes: number | null = null;
  // workoutTypes = ['Running', 'Cycling', 'Yoga'];

  // constructor(private workoutService: WorkoutService) {}

  // addWorkout() {
  //   if (this.username && this.workoutType && this.minutes) {
  //     const newWorkout: Workout = {
  //       id: 0,
  //       userName: this.username,
  //       workoutType: this.workoutType,
  //       minutes: this.minutes,
  //       date: new Date()
  //     };
  //     this.workoutService.addWorkout(newWorkout);
  //     this.username = '';
  //     this.workoutType = '';
  //     this.minutes = null;
  //   }
  // }
}
