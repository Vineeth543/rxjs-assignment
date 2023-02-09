import { Component } from '@angular/core';
import { fromEvent, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-question-seven',
  templateUrl: './question-seven.component.html',
  styleUrls: ['./question-seven.component.less'],
})
export class QuestionSevenComponent {
  subscription: Subscription = new Subscription();
  _buttonMsg: string = 'Show Answer';
  _showAnswer: boolean = false;
  _answer: string = 'Coming Soon...';

  ngOnInit(): void {
    fromEvent(document, 'click').subscribe(() => this.startInterval());
  }

  startInterval(): void {
    this._answer = '';
    this.subscription.unsubscribe();
    this.subscription = interval(500).subscribe((val) => {
      this._answer += val.toString() + ' ';
    });
  }

  showAnswer(): void {
    this._buttonMsg = this._showAnswer ? 'Show Answer' : 'Hide Answer';
    this._showAnswer = !this._showAnswer;
  }
}
