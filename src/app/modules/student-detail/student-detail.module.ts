import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailComponent } from './student-detail.component';
import { StudentDetailHeaderComponent } from './student-detail-header/student-detail-header.component';



@NgModule({
  declarations: [StudentDetailComponent, StudentDetailHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StudentDetailComponent
  ],
})
export class StudentDetailModule { }
