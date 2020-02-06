import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { QuizService } from "../shared/quiz.service";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  //---------------- Properties---------------
  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  correctAnswerCount: number = 0;

  constructor(private router: Router, private quizService: QuizService) {}

  ngOnInit() {
    this.seconds = 0;
    this.qnProgress = 0;
    this.qns = this.quizService.getQuestions();
  }

  Answer(qID: number, choice: string) {
    this.quizService.serAnswer(qID, choice);

    if (this.qns.length === this.qnProgress + 1) {
      this.router.navigate(["/result"]);
    } else this.qnProgress++;
  }

}
