import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionService } from '../../services/question-service.service';
import { TopicListComponent } from './topic-list/topic-list.component';
import {TopicService} from '../../services/topic.service';
import {FormsModule} from '@angular/forms';
import { EvaluateComponent } from './evaluate/evaluate.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    TopicListComponent,
    EvaluateComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QuestionService, TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
