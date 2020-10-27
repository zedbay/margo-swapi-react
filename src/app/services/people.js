import { map } from 'rxjs/operators';
import NetworkService from "./network";
import { Observable, forkJoin } from 'rxjs';
import { getIdFromUrl } from '../utils/url-formatter';

class CharacterService {

  static endPoint = 'people';

  static getPeople(id) {
    return NetworkService
      .get(`${CharacterService.endPoint}/${id}`)
      .pipe(map((character) => {
        character.id = parseInt(getIdFromUrl(character.url));
        return character;
      }));
  }

  static listPeople(ids) {
    return new Observable((observer) => {
      const requests = ids.map((id) => this.getPeople(id));
      forkJoin(requests).subscribe((peoples) => {
        observer.next(peoples);
        observer.complete();
      });
    });
  }

}

export default CharacterService;
