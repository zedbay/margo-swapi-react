import React, { useEffect } from 'react';
import FilmService from '../../services/film';
import { connect } from 'react-redux';
import './home.scss';

function Home(props) {

  const { setFilm } = props;

  useEffect(() => {
    FilmService.list().subscribe((films) => { setFilm(films) });
  }, [setFilm]);

  return (
    <div className="home">
      <h1>
        Chose a movie
      </h1>
      <div className="films-container">
        {props.films.map((film) =>
          <img key={film.id}
            onClick={() => props.history.push(`/movie/${film.id}`)}
            onMouseEnter={() => props.changeTitle(film.title)}
            onMouseLeave={() => props.changeTitle(' - ')} src={`/images/films/${film.id}.jpg`} alt={film.title} />
        )}
      </div>
      <h2>
        {props.currentTitle}
      </h2>
    </div>
  );

}

const mapStateToProps = state => {
  return {
    currentTitle: state.homeReducer.currentTitle,
    films: state.homeReducer.films
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeTitle: (value) => {
      dispatch({ type: 'CHANGE_TITLE', value });
    },
    setFilm: (value) => {
      dispatch({ type: 'SET_FILMS', value });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
