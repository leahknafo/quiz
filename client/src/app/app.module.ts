import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { AboutComponent } from './about/about.component';
import { QuizzesListComponent } from './quizzes-list/quizzes-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login/login.component';
import { Jwt } from './interceptors/jwt';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    AboutComponent,
    QuizzesListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Jwt,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
