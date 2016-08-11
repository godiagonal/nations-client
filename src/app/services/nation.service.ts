import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as io from 'socket.io-client';
import { BehaviorSubject } from 'rxjs/Rx';

import { Nation } from '../models';
import { appConfig } from '../config';
import { ArrayExtensions } from '../extensions';

@Injectable()
export class NationService {
  nationsSub = new BehaviorSubject([]);
  selectedNationSub = new BehaviorSubject(null);

  private socket: any;
  private nations: Nation[] = [];
  private tempSelectedNation: Nation;

  set selectedNation(nation: Nation) {
    if (this.nations.length) {
      this.selectedNationSub.next(nation);
    } else {
      this.tempSelectedNation = nation;
    }
  }

  constructor(private http: Http) {
    // Attach socket event listeners
    this.socket = io(appConfig.socketUrl);
    this.addSocketListeners();
  }

  loadNations(): Promise<Nation[]> {
    return new Promise((resolve, reject) => {
      this.http.get(`${appConfig.apiUrl}/nations`)
        .toPromise()
        .then(res => {
          let json = res.json();

          if (json.error) {
            reject(json.error);
          }
          else {
            // Update nations and notify all subscribers
            this.nations = json.data.map(nation => Nation.fromObject(nation));
            this.nationsSub.next(this.nations);

            // Select a nation if one was selected earlier (before the nation list was loaded)
            this.setNationWhenLoaded();

            resolve(this.nations);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  loadNation(id: string): Promise<Nation> {
    return new Promise((resolve, reject) => {
      this.http.get(`${appConfig.apiUrl}/nations/${id}`)
        .toPromise()
        .then(res => {
          let json = res.json();

          if (json.error) {
            reject(json.error);
          }
          else {
            let nation: Nation = Nation.fromObject(json.data);

            // Find and update nation in array
            for (var i = 0; i < this.nations.length; i++) {
              if (this.nations[i].id === nation.id) {
                this.nations[i] = nation;
                break;
              }
            }

            // Since we replaced one of the references in the nations
            // array we need to notify all subscribers of the change
            this.nationsSub.next(this.nations);

            resolve(nation);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  sortNations(args) {
    this.nations.sort(ArrayExtensions.dynamicSortMultiple(args));
  }

  private setNationWhenLoaded() {
    if (this.tempSelectedNation) {
      this.selectedNationSub.next(this.tempSelectedNation);
      this.tempSelectedNation = null;
    }
  }

  private addSocketListeners() {
    // Triggered when someone updates the visitor current or max count
    this.socket.on('updateNationVisitorStatus', res => {
      // Find and update nation in array. This way the reference
      // to the nation stays the same and all views in the app
      // where this nation is referenced will update.
      for (var i = 0; i < this.nations.length; i++) {
        if (this.nations[i].id === res.nationId) {
          this.nations[i].currentVisitors = res.currentVisitors;
          this.nations[i].maxVisitors = res.maxVisitors;
          break;
        }
      }
    });
  }
}
