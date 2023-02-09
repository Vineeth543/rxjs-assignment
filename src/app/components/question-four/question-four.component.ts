import { Component } from '@angular/core';
import { forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-question-four',
  templateUrl: './question-four.component.html',
  styleUrls: ['./question-four.component.less'],
})
export class QuestionFourComponent {
  _buttonMsg: string = 'Show Answer';
  _showAnswer: boolean = false;
  _answer: string = '';

  ngOnInit(): void {
    let person1 = { age: 27, name: 'Foo' };
    let person2 = { age: 25, name: 'Bar' };

    forkJoin([of(person1), of(person2)]).subscribe((person) => {
      this._answer = JSON.stringify(person);
    });
  }

  showAnswer(): void {
    this._buttonMsg = this._showAnswer ? 'Show Answer' : 'Hide Answer';
    this._showAnswer = !this._showAnswer;
  }
}
