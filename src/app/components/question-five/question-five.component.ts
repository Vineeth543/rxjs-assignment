import { Component } from '@angular/core';
import { forkJoin, map, of } from 'rxjs';

@Component({
  selector: 'app-question-five',
  templateUrl: './question-five.component.html',
  styleUrls: ['./question-five.component.less'],
})
export class QuestionFiveComponent {
  _buttonMsg: string = 'Show Answer';
  _showAnswer: boolean = false;
  _answer: string = '';

  ngOnInit(): void {
    forkJoin([of('bar'), Promise.resolve(9)])
      .pipe(map((val) => '{' + val + '}'))
      .subscribe((data) => {
        console.log(Object(data));
        this._answer = JSON.stringify(data);
      });
  }

  showAnswer(): void {
    this._buttonMsg = this._showAnswer ? 'Show Answer' : 'Hide Answer';
    this._showAnswer = !this._showAnswer;
  }
}
