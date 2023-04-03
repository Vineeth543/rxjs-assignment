import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { interval, map, take } from 'rxjs';

interface Character {
  name: string;
  character: string;
}

@Component({
  selector: 'app-question-thirteen',
  templateUrl: './question-thirteen.component.html',
  styleUrls: ['./question-thirteen.component.less'],
})
export class QuestionThirteenComponent {
  characters: Character[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const characters = ['Calcifer', 'Alchemist', 'X-Men', 'Link'];
    interval(1000)
      .pipe(take(4))
      .subscribe((index) => this.getCharacter(characters[index]));
  }

  getCharacter(name: string) {
    this.http
      .get<Character[]>('../../assets/characters.json')
      .pipe(
        map(
          (data: Character[]) => data.filter((res) => res.character === name)[0]
        )
      )
      .subscribe((data) => {
        this.characters.push(data);
      });
  }
}
