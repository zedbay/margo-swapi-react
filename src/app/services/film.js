import { map } from 'rxjs/operators';
import { getIdFromUrl } from '../utils/url-formatter';
import NetworkService from "./network";

class FilmService {

  static endPoint = 'films';

  static list() {
    return NetworkService
      .get(FilmService.endPoint)
      .pipe(map((data) => data.results.map((film) => FilmService.getFilmWithId(film))));
  }

  static read(id) {
    return NetworkService
      .get(`${FilmService.endPoint}/${id}`)
      .pipe(map((film) => FilmService.getFilmWithId(film)));
  }

  static getFilmWithId(film) {
    film.id = getIdFromUrl(film.url);
    return film;
  }
}

export default FilmService;
