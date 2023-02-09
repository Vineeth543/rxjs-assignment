import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { QuestionEightComponent } from './components/question-eight/question-eight.component';
import { QuestionNineComponent } from './components/question-nine/question-nine.component';
import { QuestionTenComponent } from './components/question-ten/question-ten.component';
import { QuestionElevenComponent } from './components/question-eleven/question-eleven.component';

@NgModule({
  declarations: [AppComponent, routingComponents, QuestionEightComponent, QuestionNineComponent, QuestionTenComponent, QuestionElevenComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
