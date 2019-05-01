import {Answer} from './answer';

export class Question {

  id: string;
  text: string;
  type: string;
  level: string;
  setOfAnswers: Answer[];
}
