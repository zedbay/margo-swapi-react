import axios from 'axios';
import { Observable } from 'rxjs';

class NetworkService {

  static target = 'https://swapi.dev/api/';

  static get(endPoint) {
    return new Observable((observer) => {
      axios.get(`${this.target}${endPoint}`)
        .then((res) => {
          observer.next(res.data);
        })
        .catch((err) => {
          observer.error(err);
        })
        .finally(() => {
          observer.complete();
        })
    });
  }

}

export default NetworkService;
