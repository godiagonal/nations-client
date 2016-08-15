import { environment } from '../environment';

let apiUrl = 'http://localhost:8080';
let socketUrl = 'localhost:8080';

if (environment.production) {
  apiUrl = 'https://nations-server.herokuapp.com';
  socketUrl = 'https://nations-server.herokuapp.com';
}

export const appConfig = {
  apiUrl: apiUrl,
  socketUrl: socketUrl
};
