import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { QuizService } from "./shared/quiz.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private quizService: QuizService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    switch (state.url) {
      case "/result":
        return this.quizService.finishedQuestionnaire();
      case "/quiz":
        return true;
      default:
        return this.router.navigate(["/hello"]);

        return false;
    }
  }
}
