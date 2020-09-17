import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { PresentationComponent } from './presentation/presentation.component';
import { TimelineComponent } from './timeline/timeline.component';
import { EmployerComponent } from './timeline/employer/employer.component';
import { EmployerProjectsComponent } from './timeline/employer-projects/employer-projects.component';
import { CompetenceComponent } from './competence/competence.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BackgroundComponent } from './background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    PresentationComponent,
    TimelineComponent,
    EmployerComponent,
    EmployerProjectsComponent,
    CompetenceComponent,
    ProjectsComponent,
    ContactComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
