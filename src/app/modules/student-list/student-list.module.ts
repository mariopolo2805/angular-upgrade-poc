import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { StudentListComponent } from './student-list.component';
import { StudentListHeaderComponent } from './student-list-header/student-list-header.component';

@NgModule({
  declarations: [StudentListComponent, StudentListHeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    StudentListComponent,
  ],
})
export class StudentListModule { }
