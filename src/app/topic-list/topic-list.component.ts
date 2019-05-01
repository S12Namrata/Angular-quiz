import { Component, OnInit } from '@angular/core';
import { Topic } from '../../../model/topic';
import { TopicService } from '../../../services/topic.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  listOfTopic: Topic[];
   listOfQuiz: Topic[];

  constructor(private topicService: TopicService,
              private activatedroute: ActivatedRoute,
              private router: Router
              ) {
  }

  ngOnInit() {
     let mode = this.activatedroute.snapshot.params['mode'];
     this.topicService.findAll(mode).subscribe(data => {
      if (mode === 'topics/') {
        this.listOfTopic = data;
      } else if (mode === 'quiz/') {
         this.listOfQuiz =  data;
      }

    });
  }

   deleteQuiz(quizID: any, action: any) {
      this.router.navigate( ['/delete', quizID, action] );
   }

}
