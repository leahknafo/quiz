import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { QuizService } from "../services/quiz.service";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  quizModel: Quiz;
  ngOnInit() {
  }

  constructor(private quizService: QuizService) { 
    this.quizModel=<Quiz>{};
  }

  
  addQuiz() {

    this.quizService.post(this.quizModel).subscribe(res => {
      console.log(res);
    });
  }

}
