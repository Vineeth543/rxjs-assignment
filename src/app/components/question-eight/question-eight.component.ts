import { Component } from '@angular/core';
import { filter, forkJoin, from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-question-eight',
  templateUrl: './question-eight.component.html',
  styleUrls: ['./question-eight.component.less'],
})
export class QuestionEightComponent {
  _buttonMsg: string = 'Show Answer';
  _showAnswer: boolean = false;
  _answer: string = '';

  ngOnInit(): void {
    let personObservable$ = from([
      { name: 'John', age: 29 },
      { name: 'Peter', age: 31 },
    ]);

    personObservable$
      .pipe(filter((person) => person.age > 30))
      .subscribe((person) => {
        this._answer = JSON.stringify(person);
      });
  }

  showAnswer(): void {
    this._buttonMsg = this._showAnswer ? 'Show Answer' : 'Hide Answer';
    this._showAnswer = !this._showAnswer;
  }
}
