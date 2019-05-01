import {Component, OnInit} from '@angular/core';
import {EvaluateService} from '../../../services/evaluate.service';
import {ActivatedRoute} from "@angular/router";

@Component({
   selector: 'app-evaluate',
   templateUrl: './evaluate.component.html',
   styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent implements OnInit {
   private correctAns: string;
   private totalQues: string;

   constructor(
      private evaluateService: EvaluateService,
      private activatedroute: ActivatedRoute,
   ) {
   }

   ngOnInit() {
      console.log(this.activatedroute.snapshot.params);
      this.evaluateService.getResult(this.activatedroute.snapshot.params).subscribe(data => {
         this.correctAns = data.correct;
         this.totalQues = data.total;
      });

   }

}
