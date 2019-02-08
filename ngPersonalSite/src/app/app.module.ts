import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    NavigationComponent,
    AboutMeComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
