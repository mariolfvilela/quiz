import { Routes } from "@angular/router";
import { HelloComponent } from "./hello/hello.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ResultComponent } from "./result/result.component";
import { AuthGuard } from "./auth.guard";
import { ResultResolver } from "./shared/result-resolver.service";

export const appRoutes: Routes = [
  { path: "hello", component: HelloComponent },
  { path: "quiz", component: QuizComponent, canActivate: [AuthGuard] },
  {
    path: "result",
    component: ResultComponent,
    canActivate: [AuthGuard],
    resolve: { server: ResultResolver }
  },
  { path: "", redirectTo: "/hello", pathMatch: "full" }
];
