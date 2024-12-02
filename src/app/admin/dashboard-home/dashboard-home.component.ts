import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ColorFormat, MtxColorpickerModule } from '@ng-matero/extensions/colorpicker';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [FormsModule, MatRadioModule, MatFormFieldModule, MatInputModule, MtxColorpickerModule],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {
  color = '#3f51b5';
  format: ColorFormat = 'hex';

}
