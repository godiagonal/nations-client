import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { BehaviorSubject } from 'rxjs/Rx';

import { Nation } from '../models';
import { socketConfig } from '../config';

@Injectable()
export class NationService {
  nations: Nation[] = [];

  nationsSub = new BehaviorSubject([]);
  selectedNationSub = new BehaviorSubject(null);

  private socket: any;
  private tempSelectedNation: Nation;

  set selectedNation(nation: Nation) {
    if (this.nations.length) {
      this.selectedNationSub.next(nation);
    } else {
      this.tempSelectedNation = nation;
    }
  }

  constructor() {
    this.socket = io(socketConfig.url);
    this.addListeners();
  }

  private setNationWhenLoaded() {
    if (this.tempSelectedNation) {
      this.selectedNationSub.next(this.tempSelectedNation);
      this.tempSelectedNation = null;
    }
  }

  addListeners() {
    this.socket.on('nationList', res => {
      // The view doesn't update when just replacing the array,
      // probably because the view is still referencing the old array.
      // So this is the work-around: empty the array and re-fill
      // it so that the variable reference doesn't change.
      this.nations.length = 0;
      res.nations.map(nation => {
        this.nations.push(Nation.fromObject(nation));
      });
      this.nationsSub.next(this.nations);

      // Select a nation if one was selected earlier (before the nation list was loaded)
      this.setNationWhenLoaded();
    });

    this.socket.on('addNation', res => {
      var newNation = Nation.fromObject(res.nation);
      if (!this.nations.some((nation: Nation) => nation.id === newNation.id)) {
        this.nations.push(newNation);
      }
      this.nationsSub.next(this.nations);
    });

    this.socket.on('updateNation', res => {
      var updatedNation = Nation.fromObject(res.nation);
      this.nations.forEach((nation: Nation, i: number) => {
        if (nation.id === updatedNation.id) {
          this.nations[i] = updatedNation;
          return;
        }
      });
      this.nationsSub.next(this.nations);
    });

    this.socket.on('removeNation', res => {
      var removedNation = Nation.fromObject(res.nation);
      this.nations.forEach((nation: Nation, i: number) => {
        if (nation.id === removedNation.id) {
          this.nations.splice(i, 1);
          return;
        }
      });
      this.nationsSub.next(this.nations);
    });
  }
}
