import { Routes } from '@angular/router';
import { TaskviewComponent } from './pages/taskview/taskview.component';

export const routes: Routes = [
    {path: '', redirectTo: 'lists', pathMatch: 'full'},
    {path: 'lists', component: TaskviewComponent},
    {path: 'lists/:listId', component: TaskviewComponent}
];
