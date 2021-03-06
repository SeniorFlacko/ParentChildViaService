import { Component, OnInit } from '@angular/core';
import { MissionService } from '../services/mission.service';

@Component({
  selector: 'app-missioncontrol',
  templateUrl: './missioncontrol.component.html',
  styleUrls: ['./missioncontrol.component.css'],
  providers: [MissionService]
})
export class MissioncontrolComponent implements OnInit {
  astronauts = ['Brandon', 'Cristian', 'Jesus'];
  history: string[] = [];

  missions = ['Fly to the moon!', 'Fly to mars!', 'Fly to Vegas'];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    missionService.missionCondfirmed$.subscribe(astronaut => {
      this.history.push(`${ astronaut } confirmed the mission `);
    });
    missionService.missionCancel$.subscribe(astronaut => {
      this.history.push(`${ astronaut } cancel the mission `);
    });
  }

  ngOnInit() {
  }


  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission ${ mission } announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }

}
