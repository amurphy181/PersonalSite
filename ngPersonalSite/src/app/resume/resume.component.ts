import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  skillsPanelState = false;
  personalSummaryState = false;
  experienceState = false;
  educationState = false;
  skillDistilleryState = false;
  ospreyAirWorksState = false;
  solomonState = false;
  trinitySolarState = false;
  solarCityState = false;
  whitneyPropState = false;


  // stepper for the experience sub-accordion
  stepJobs = null;
  setStepJobs(index: number) {
    this.stepJobs = index;
  }
  nextStepJobs() {
    this.stepJobs++;
  }
  prevStepJobs() {
    this.stepJobs--;
  }

  constructor() { }

  ngOnInit() {
  }

}
