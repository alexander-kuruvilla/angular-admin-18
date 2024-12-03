import { Routes } from '@angular/router';
import { DashboardHomeComponent } from './admin/dashboard-home/dashboard-home.component';
import { TableComponent } from './admin/table/table.component';

export const routes: Routes = [
    { path: 'home', component: DashboardHomeComponent},  
    { path: 'table', component: TableComponent},  
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
