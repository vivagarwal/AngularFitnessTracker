import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
//import { WorkoutChartComponent } from './workout-chart/workout-chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/workout-form', pathMatch: 'full' },
  { path: 'workout-form', component: UserFormComponent },
  { path: 'workout-list', component: WorkoutListComponent },
  //{ path: 'workout-chart', component: WorkoutChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
