import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { QuizService } from "../shared/quiz.service";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"]
})
export class ResultComponent implements OnInit {
  result = { name: "", score: 0 };
  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      this.result.score = data.server
        .map(x => x.answer === x.CorrectAnswer)
        .filter(q => !!q).length;
      this.result.name = this.quizService.getParticipantName();
    });
  }
}
