import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionEightComponent } from './components/question-eight/question-eight.component';
import { QuestionElevenComponent } from './components/question-eleven/question-eleven.component';
import { QuestionFiveComponent } from './components/question-five/question-five.component';
import { QuestionFourComponent } from './components/question-four/question-four.component';
import { QuestionNineComponent } from './components/question-nine/question-nine.component';
import { QuestionOneComponent } from './components/question-one/question-one.component';
import { QuestionSevenComponent } from './components/question-seven/question-seven.component';
import { QuestionSixComponent } from './components/question-six/question-six.component';
import { QuestionTenComponent } from './components/question-ten/question-ten.component';
import { QuestionThreeComponent } from './components/question-three/question-three.component';
import { QuestionTwoComponent } from './components/question-two/question-two.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'question-1',
    pathMatch: 'full',
  },
  {
    path: 'question-1',
    component: QuestionOneComponent,
  },
  {
    path: 'question-2',
    component: QuestionTwoComponent,
  },
  {
    path: 'question-3',
    component: QuestionThreeComponent,
  },
  {
    path: 'question-4',
    component: QuestionFourComponent,
  },
  {
    path: 'question-5',
    component: QuestionFiveComponent,
  },
  {
    path: 'question-6',
    component: QuestionSixComponent,
  },
  {
    path: 'question-7',
    component: QuestionSevenComponent,
  },
  {
    path: 'question-8',
    component: QuestionEightComponent,
  },
  {
    path: 'question-9',
    component: QuestionNineComponent,
  },
  {
    path: 'question-10',
    component: QuestionTenComponent,
  },
  {
    path: 'question-11',
    component: QuestionElevenComponent,
  },
];

export const routingComponents = [
  QuestionOneComponent,
  QuestionTwoComponent,
  QuestionThreeComponent,
  QuestionFourComponent,
  QuestionFiveComponent,
  QuestionSixComponent,
  QuestionSevenComponent,
  QuestionEightComponent,
  QuestionNineComponent,
  QuestionTenComponent,
  QuestionElevenComponent,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
