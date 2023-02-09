import { Component } from '@angular/core';

@Component({
  selector: 'app-question-six',
  templateUrl: './question-six.component.html',
  styleUrls: ['./question-six.component.less'],
})
export class QuestionSixComponent {
  _buttonMsg: string = 'Show Answer';
  _showAnswer: boolean = false;
  _answer: string = 'Coming Soon...';

  ngOnInit(): void {}

  showAnswer(): void {
    this._buttonMsg = this._showAnswer ? 'Show Answer' : 'Hide Answer';
    this._showAnswer = !this._showAnswer;
  }
}
