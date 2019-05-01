import {Component, OnInit} from '@angular/core';
import {Question} from '../../../model/question';
import {QuestionService} from '../../../services/question-service.service';
import {Router, ActivatedRoute} from '@angular/router';
import {EvaluateService} from '../../../services/evaluate.service';
import {QuizService} from '../../../services/quiz-service.service';

@Component({
   selector: 'app-question-list',
   templateUrl: './question-list.component.html',
   styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
   listOfQuestion: Question[];
   topicId: string;
   userAnswersMap = [];
   quizId: any;

   constructor(
      private questionService: QuestionService,
      private activatedroute: ActivatedRoute,
      private evaluateService: EvaluateService,
      private router: Router,
      private quizService: QuizService
   ) {
   }

   ngOnInit() {
      this.topicId = this.activatedroute.snapshot.params['topicId'];
      this.quizId = this.activatedroute.snapshot.params['quizId'];
      if (this.topicId) {
      this.questionService.getQuizBasedOnTopic(this.topicId).subscribe(data => {
         this.listOfQuestion = data;
      });
      } else if (this.quizId) {
         this.quizService.findAll(this.quizId).subscribe(data => {
            this.listOfQuestion = data['setOfQuestion'];
         });
      }
   }

   onAnswerSelect(questionId: any, userAnswer: any): void {
      const tempAnswerToBePushed = {};
      tempAnswerToBePushed[questionId.toString()] = userAnswer.text ? userAnswer.text : userAnswer;

      this.userAnswersMap.map(item => {
         if (item[questionId.toString()]) {
            item[questionId.toString()] = userAnswer.text ? userAnswer.text : userAnswer;
         }
      });
      this.userAnswersMap[questionId.toString()] = userAnswer.text ? userAnswer.text : userAnswer;
   }

   onSubmit() {
      this.router.navigate( ['/result', this.userAnswersMap]);
   }
}
