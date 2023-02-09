import { Component, OnInit } from '@angular/core';
import { filter, map, of } from 'rxjs';

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.less'],
})
export class QuestionOneComponent implements OnInit {
  _buttonMsg: string = 'Show Answer';
  _showAnswer: boolean = false;
  _answer: string = '';

  ngOnInit(): void {
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(
        filter((x) => x % 2 === 0),
        map((x) => x * 2)
      )
      .subscribe((x) => (this._answer += x + ' '));
  }

  showAnswer(): void {
    this._buttonMsg = this._showAnswer ? 'Show Answer' : 'Hide Answer';
    this._showAnswer = !this._showAnswer;
  }
}
