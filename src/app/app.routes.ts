import { Routes } from '@angular/router';
import { DashboardHomeComponent } from './admin/dashboard-home/dashboard-home.component';
import { TableComponent } from './admin/table/table.component';
import { FormComponent } from './admin/form/form.component';
import { ChipsComponent } from './admin/chips/chips.component';

export const routes: Routes = [
    { path: 'home', component: DashboardHomeComponent},  
    { path: 'table', component: TableComponent},  
    { path: 'form', component: FormComponent},  
    { path: 'chips', component: ChipsComponent},  
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
