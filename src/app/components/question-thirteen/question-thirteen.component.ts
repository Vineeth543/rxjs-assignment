import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { interval, map, of, zipWith } from 'rxjs';

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
    of('Calcifer', 'Alchemist', 'X-Men', 'Link')
      .pipe(zipWith(interval(1000)))
      .subscribe((data) => this.getCharacter(data[0]));
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
