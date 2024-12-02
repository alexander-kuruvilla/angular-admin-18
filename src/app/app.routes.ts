import { Routes } from '@angular/router';
import { DashboardHomeComponent } from './admin/dashboard-home/dashboard-home.component';

export const routes: Routes = [
    { path: 'home', component: DashboardHomeComponent},  
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
