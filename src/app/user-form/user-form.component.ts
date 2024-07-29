import { Component } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  standalone:true,
  imports:[FormsModule]
})
export class UserFormComponent {
  constructor(private workoutService: WorkoutService) {}

  onSubmit(form : any) {
    const newWorkout = {
      id: Date.now(),
      userName: form.value.userName,
      workoutType: form.value.workoutType,
      minutes: form.value.minutes
    };
    this.workoutService.addWorkout(newWorkout);
    form.reset();
  }
}
