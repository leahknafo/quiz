import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz:Quiz;

  constructor() { }

  ngOnInit() {
  }

}
