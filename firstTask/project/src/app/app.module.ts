import { TuiRootModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiToggleModule} from '@taiga-ui/kit';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CoursesComponent,
    FooterComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      TuiRootModule,
      FormsModule,
      ReactiveFormsModule,
      TuiToggleModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
