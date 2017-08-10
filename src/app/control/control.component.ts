import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})

export class ControlComponent implements OnInit {

  public teams: Array<any>;
  public teamWidth: Number;

  constructor() {
    this.teamWidth = 0;
    this.teams = [];
  }

  ngOnInit() { }

  addTeam() {
    this.teams.push([]);
    this.refreshWidthScroll();
  }

  removeThisTeam(myID) {
    this.teams.splice(myID, 1);
    this.refreshWidthScroll();
  }

  refreshWidthScroll() {
    this.teamWidth = this.teams.length * 210;
  }

  sendToLeft(obj) {
    // This method is here as example
    // of 'Output / EventEmitter' use.
    const to = obj.me - 1;
    const who = obj.who;
    this.teams[to].push(who);
  }

  sendToRight(obj) {
    // This method is here as example
    // of 'Output / EventEmitter' use.
    const to = obj.me + 1;
    const who = obj.who;
    this.teams[to].push(who);
  }

}
