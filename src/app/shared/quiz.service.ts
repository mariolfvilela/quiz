import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class QuizService {
  //---------------- Properties---------------
  private Questions: any[] = [
    {
      Id: 0,
      Question: "Which is the largest country in the world by population?",
      Options: ["India", "USA", "China", "Russia"],
      CorrectAnswer: "China",
      answer: undefined
    },

    {
      Id: 1,
      Question: "When did the second world war end?",
      Options: ["1945", "1939", "1944", "1942"],
      CorrectAnswer: "1945",
      answer: undefined
    },

    {
      Id: 2,
      Question: "Which was the first country to issue paper currency?",
      Options: ["USA", "France", "Italy", "China"],
      CorrectAnswer: "China",
      answer: undefined
    },

    {
      Id: 3,
      Question: "Which city hosted the 1996 Summer Olympics?",
      Options: ["Atlanta", "Sydney", "Athens", "Beijing"],
      CorrectAnswer: "Atlanta",
      answer: undefined
    },

    {
      Id: 4,
      Question: "Who invented telephone?",
      Options: [
        "Albert Einstein",
        "Alexander Graham Bell",
        "Isaac Newton",
        "Marie Curie"
      ],
      CorrectAnswer: "Alexander Graham Bell",
      answer: undefined
    }
  ];
  //---------------- Helper Methods---------------
  constructor(private http: HttpClient) {}

  getParticipantName() {
    return JSON.parse(localStorage.getItem("participant"));
  }

  setParticipantName(name: string): void {
    localStorage.clear();
    localStorage.setItem("participant", JSON.stringify(name));
  }

  //---------------- Http Methods---------------

  private getAll(): any[] {
    return this.Questions;
  }

  getQuestions() {
    return this.getAll();
  }

  serAnswer(index: number, choice: string) {
    this.Questions[index].answer = choice;
  }
  finishedQuestionnaire(): boolean {
    return this.Questions.filter(q => q.answer === undefined).length === 0;
  }
}
