import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { QuizService } from "../services/quiz.service";

@Component({
  selector: 'app-quizzes-list',
  templateUrl: './quizzes-list.component.html',
  styleUrls: ['./quizzes-list.component.css']
})
export class QuizzesListComponent implements OnInit {
  quizzes: Quiz[];

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    console.log('RecipeListComponent ngOnInit')

    this.quizService.get().subscribe(quizData => {
      this.quizzes = <Quiz[]><any>quizData;
    });
  }
}


