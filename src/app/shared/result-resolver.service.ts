import { Injectable } from "@angular/core";
import { QuizService } from "./quiz.service";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ResultResolver implements Resolve<any[]> {
  constructor(private quizService: QuizService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any[]> | Promise<any[]> | any[] {
    return of<any[]>(this.quizService.getQuestions());
  }
}
