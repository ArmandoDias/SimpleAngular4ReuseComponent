import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() myID: number;
  @Input() iAmTheFirst: Boolean;
  @Input() iAmTheLast: Boolean;
  @Input() teams: Array<any>;
  @Output() removeMe = new EventEmitter<number>();
  @Output() sendThisToMyLeft = new EventEmitter<object>();
  @Output() sendThisToMyRight = new EventEmitter<object>();

  private nplayer: String;

  constructor() {
    this.nplayer = '';
  }

  ngOnInit() { }

  createPlayer() {
    const playerToCreate = this.nplayer.trim();
    if (playerToCreate.length > 0) {
      this.nplayer = '';
      this.teams[this.myID].push(playerToCreate);
      return true;
    }
    const inputField: HTMLElement = <HTMLElement>document.querySelectorAll(`.focusOnMe${this.myID}`)[0];
    inputField.focus();
  }

  removeThisTeam() {
    if (this.myID >= 0) {
      const tempID = this.myID;
      this.myID = -1;
      this.removeMe.emit(tempID);
    }
  }

  sendToLeft(indexValue: number) {
    if (!this.iAmTheFirst) {
      this.sendThisToMyLeft.emit({ me: this.myID, who: this.teams[this.myID][indexValue] });
      this.teams[this.myID].splice(indexValue, 1);
    }
  }

  sendToRight(indexValue: number) {
    if (!this.iAmTheLast) {
      this.sendThisToMyRight.emit({ me: this.myID, who: this.teams[this.myID][indexValue] });
      this.teams[this.myID].splice(indexValue, 1);
    }
  }

}
