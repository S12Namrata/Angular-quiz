import {Component, OnInit} from '@angular/core';
import {Quiz} from '../../../model/quiz';
import {QuizService} from '../../../services/quiz-service.service';
import {QuestionService} from '../../../services/question-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from '../../../model/question';
import {Answer} from '../../../model/answer';

@Component({
   selector: 'app-quiz',
   templateUrl: './quiz.component.html',
   styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

   quiz: Quiz = {
      id: '',
      text: '',
      setOfQuestion: []
};
   ques: Question = {
      id: '',
      text: 'question_text',
      type: 'M',
      level: '2',
      setOfAnswers: [
         {text: 'option_1 text here ', isCorrect: 'FALSE'},
         {text: 'option_2 text here', isCorrect: 'FALSE'},
         {text: 'option_3 text here', isCorrect: 'FALSE'},
         {text: 'option_4 text here', isCorrect: 'FALSE'}
      ]
   };

   constructor(private quizService: QuizService,
               private questionService: QuestionService,
               private activatedRoute: ActivatedRoute,
               private router: Router
   ) {
      this.quiz.setOfQuestion.push(this.ques);
   }


   ngOnInit() {
      console.log(this.activatedRoute.snapshot.params);
      const quizId = this.activatedRoute.snapshot.params['quizId'];
      if (this.activatedRoute.snapshot.params['action'] === 'DELETE') {
         this.quizService.deleteQuiz(quizId).subscribe(result => this.gotoQuizList());
      }
   }

   addQuestions() {

      const dummy = {
         id: '',
         text: 'question_text',
         type: 'M',
         level: '2',
         setOfAnswers: [
            {text: 'option_1 text here ', isCorrect: 'FALSE'},
            {text: 'option_2 text here', isCorrect: 'FALSE'},
            {text: 'option_3 text here', isCorrect: 'FALSE'},
            {text: 'option_4 text here', isCorrect: 'FALSE'}
         ]
      };

      this.quiz.setOfQuestion.push(dummy);
   }
   onSelectionChange(val: any, setOfAnswers: Answer[]) {
      for (const ans of setOfAnswers) {
         if (ans.isCorrect === val) {
            ans.isCorrect = 'TRUE';
         } else {
            ans.isCorrect = 'FALSE';
         }
      }
   }
   onSubmit() {
      this.quizService.save(this.quiz).subscribe(result => this.gotoQuizList());
   }

   gotoQuizList() {
      this.router.navigate(['/fetch', 'quiz/']);
   }

}
