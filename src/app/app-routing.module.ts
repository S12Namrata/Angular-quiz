import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import {TopicListComponent} from './topic-list/topic-list.component';
import {EvaluateComponent} from './evaluate/evaluate.component';
import {QuizComponent} from './quiz/quiz.component';

const routes: Routes = [
  { path: 'questions', component: QuestionListComponent},
  {path: 'topics/:mode', component: TopicListComponent},
  {path: 'topic_based_quiz/:topicId', component: QuestionListComponent},
  {path: 'result', component: EvaluateComponent},
   {path: 'fetch/:mode', component: TopicListComponent},
   {path: 'selected_quiz/:quizId', component: QuestionListComponent},
   {path: 'create', component: QuizComponent},
   {path: 'save', component: QuizComponent},
   {path: 'delete/:quizId/:action', component: QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
