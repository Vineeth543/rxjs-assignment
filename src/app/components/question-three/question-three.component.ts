import { Component, OnInit } from '@angular/core';
import {
  Subscription,
  fromEvent,
  of,
  mergeMap,
  interval,
  map,
  debounce,
} from 'rxjs';

@Component({
  selector: 'app-question-three',
  templateUrl: './question-three.component.html',
  styleUrls: ['./question-three.component.less'],
})
export class QuestionThreeComponent implements OnInit {
  subscription: Subscription = new Subscription();
  _buttonMsg: string = 'Show Answer';
  _showAnswer: boolean = false;
  _answer: string = '';

  ngOnInit(): void {
    fromEvent(document, 'click')
      .pipe(mergeMap((event) => of(event).pipe(debounce(() => interval(1000)))))
      .subscribe((data) => {
        console.log(data);
      });
  }

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
