import { Component, EventEmitter, Output } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button'; 

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule, MatButtonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

  @Output() toggleSideNav = new EventEmitter<void>();

  onToggleSideNav(){
    this.toggleSideNav.emit();
  }

}
