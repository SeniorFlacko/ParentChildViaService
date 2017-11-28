import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MissionService {

  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();
  private missionCancelSource = new Subject<string>();

  // Observable string streams

  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionCondfirmed$ = this.missionConfirmedSource.asObservable();
  missionCancel$ = this.missionCancelSource.asObservable();

  // Service message commands

  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }

  constructor() { }

  cancelMission( astronaut: string ) {
    this.missionCancelSource.next(astronaut);
  }

}
