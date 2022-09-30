import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  //necesitamos exportalo para poderlo usar el app.module
  //y utilizarlo en otros componentes
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
