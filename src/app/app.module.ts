import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudentListModule } from './modules/student-list/student-list.module';
import { StudentDetailModule } from './modules/student-detail/student-detail.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // App Modules
    StudentListModule,
    StudentDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
