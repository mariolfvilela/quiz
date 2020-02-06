import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { APP_BASE_HREF } from "@angular/common";

import { AppComponent } from "./app.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ResultComponent } from "./result/result.component";
import { appRoutes } from "./routes";
import { AuthGuard } from "./auth.guard";
import { HelloComponent } from "./hello/hello.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { QuizService } from "./shared/quiz.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    QuizComponent,
    ResultComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent],
  providers: [QuizService, AuthGuard, { provide: APP_BASE_HREF, useValue: "/" }]
})
export class AppModule {}
