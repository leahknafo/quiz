import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';
import { QuizzesListComponent } from './quizzes-list/quizzes-list.component';
import { LoginComponent } from './user/login/login/login.component';
import { LoggedGuard } from './guards/logged-guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent  },
  {path:'quiz', component: QuizzesListComponent, canActivate: [LoggedGuard] },
  {path:'add', component: AboutComponent, canActivate: [LoggedGuard]},
  {path:'quiz/:id', component: QuizComponent, canActivate: [LoggedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
