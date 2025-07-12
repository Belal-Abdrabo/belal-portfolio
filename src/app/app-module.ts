import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './Components/header/header';
import { Summary } from './Components/summary/summary';
import { Education } from './Components/education/education';
import { Skills } from './Components/skills/skills';
import { Training } from './Components/training/training';
import { Projects } from './Components/projects/projects';
import { Additional } from './Components/additional/additional';
import { Footer } from './Components/footer/footer';

@NgModule({
  declarations: [
    App,
    Header,
    Summary,
    Education,
    Skills,
    Training,
    Projects,
    Additional,
    Footer],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
