import { Location } from '../nations/shared/location.model';

export const mapConfig = {
  defaultLocation: new Location(59.855, 17.634),
  locationTimeout: 5000,
  zoom: 15,
  icons: [
    {
      threshold: 0.9,
      iconUrl: 'http://i.stack.imgur.com/JWM0W.png'
    },
    {
      threshold: 0.7,
      iconUrl: 'http://i.stack.imgur.com/JWM0W.png'
    },
    {
      threshold: 0,
      iconUrl: 'http://i.stack.imgur.com/JWM0W.png'
    }
  ],
  userIconUrl: 'http://i.stack.imgur.com/JWM0W.png'
};
