import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  panelOpenState0 = false;
  panelOpenState1 = false;
  panelOpenState2 = false;
  panelOpenState3 = false;
  panelOpenState4 = false;
  panelOpenState5 = false;
  panelOpenState6 = false;
  panelOpenState7 = false;
  defaultState = true;

  step = null;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor() { }

  ngOnInit() {
  }

}
