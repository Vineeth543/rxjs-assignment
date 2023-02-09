import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-question-nine',
  templateUrl: './question-nine.component.html',
  styleUrls: ['./question-nine.component.less'],
})
export class QuestionNineComponent implements OnInit {
  subscription: Subscription = new Subscription();
  buttonEvent: Observable<Event> = new Observable<Event>();
  _answer: string = '';

  ngOnInit(): void {
    interval(500)
      .pipe(takeUntil(fromEvent(document, 'click')))
      .subscribe((val) => (this._answer += val + ' '));
  }
}
