import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NotesComponent } from './notes/notes.component';
import { NavigationComponent } from './navigation/navigation.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard/home',
      },
      {
        path: 'user',
        component: UserComponent,
        data: {
          title: 'User',
        },
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
        data: {
          title: 'Schedule',
        },
      },
      {
        path: 'notes',
        component: NotesComponent,
        data: {
          title: 'Notes',
        },
      },
      {
        path: 'navigation',
        component: NavigationComponent,
        data: {
          title: 'Navigation',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
