// The numbers determine the sort order when sorting
// by nation status
export enum nationStatus {
  open = 1,
  openCrowded = 2,
  openLater = 3,
  closed = 4
}

export const nationConfig = {
  statuses: [
    {
      status: nationStatus.open,
      text: 'Not crowded',
      iconUrl: 'img/map-pin-green.png',
      cssClass: 'nation-status-open'
    },
    {
      status: nationStatus.openCrowded,
      text: 'Crowded',
      iconUrl: 'img/map-pin-orange.png',
      cssClass: 'nation-status-open-crowded'
    },
    {
      status: nationStatus.openLater,
      text: '',
      iconUrl: 'img/map-pin-orange.png',
      cssClass: 'nation-status-open-later'
    },
    {
      status: nationStatus.closed,
      text: '',
      iconUrl: 'img/map-pin-red.png',
      cssClass: 'nation-status-closed'
    }
  ],
  crowdedThreshold: 0.8,
  photoPlaceholder: 'img/photo-placeholder.png'
};


