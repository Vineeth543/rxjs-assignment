import { Component } from '@angular/core';
import { of, map, mergeMap, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-question-two',
  templateUrl: './question-two.component.html',
  styleUrls: ['./question-two.component.less'],
})
export class QuestionTwoComponent {
  subscription: Subscription = new Subscription();
  _buttonMsg: string = 'Show Answer';
  _showAnswer: boolean = false;
  _answer: string = '';

  ngOnInit(): void {}

  _getAnswer(): void {
    this._buttonMsg = this._showAnswer ? 'Show Answer' : 'Hide Answer';
    this._showAnswer = !this._showAnswer;
  }

  _startInterval(): void {
    this.subscription = of('a', 'b', 'c')
      .pipe(
        mergeMap((x) => {
          return interval(1000).pipe(map((i) => x + i));
        })
      )
      .subscribe((x) => {
        this._answer += x + ', ';
      });
  }

  _stopInterval(): void {
    this.subscription.unsubscribe();
  }
}
