import { Component, OnInit } from "@angular/core";

import { QuizService } from "../shared/quiz.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"]
})
export class HelloComponent implements OnInit {
  constructor(private quizService: QuizService, private route: Router) {}

  ngOnInit() {}
  OnSubmit(name: string) {
    this.quizService.setParticipantName(name);
    this.route.navigate(["/quiz"]);
  }
}
