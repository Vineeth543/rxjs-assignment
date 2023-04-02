import { Component } from '@angular/core';
import { buffer, bufferTime, fromEvent, interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-question-ten',
  templateUrl: './question-ten.component.html',
  styleUrls: ['./question-ten.component.less'],
})
export class QuestionTenComponent {
  _clickCount: number = 0;
  _lastClick: number = 0;
  _timer: string = '0';

  ngOnInit(): void {
    interval(1000).subscribe(
      (val) => (this._timer = ((val % 3) + 1).toString())
    );

    // const clicks = fromEvent(document, 'click');
    // const buffered = clicks.pipe(bufferTime(3000));
    // buffered.subscribe((x) => {
    //   this._clickCount = x.length;
    //   // this._lastClick = this._clickCount;
    // });

    fromEvent(document, 'click')
      .pipe(
        tap(() => this._clickCount++),
        buffer(interval(3000))
      )
      .subscribe(() => {
        this._lastClick = this._clickCount;
        this._clickCount = 0;
      });
  }
}
