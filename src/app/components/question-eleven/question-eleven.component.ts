import { Component } from '@angular/core';
import { mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-question-eleven',
  templateUrl: './question-eleven.component.html',
  styleUrls: ['./question-eleven.component.less'],
})
export class QuestionElevenComponent {
  _buttonMsg: string = 'Show Answer';
  _showAnswer: boolean = false;
  _answer: string = '';

  ngOnInit(): void {
    let arr: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let observable$ = of(arr);
    observable$
      .pipe(
        mergeMap((numArr: number[]) => {
          numArr = numArr.filter((num: number) => num % 2 === 0);
          numArr.forEach((num: number) => num * num);
          numArr.sort((a: number, b: number) => a - b);
          return numArr;
        })
      )
      .subscribe((data: number) => (this._answer += data + ' '));
  }

  showAnswer(): void {
    this._buttonMsg = this._showAnswer ? 'Show Answer' : 'Hide Answer';
    this._showAnswer = !this._showAnswer;
  }
}
