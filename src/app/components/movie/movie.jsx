import React from 'react';
import CharacterService from '../../services/people';
import { getIdFromUrl } from '../../utils/url-formatter';
import FilmService from '../../services/film';
import MovieUserInput from './movie-user-input';
import { connect } from 'react-redux';
import './movie.scss';
import Character from './character';

class Movie extends React.Component {

  componentDidMount() {
    this.fetchCurrentMovie();
  }

  fetchCurrentMovie() {
    FilmService.read(this.props.match.params.id).subscribe((movie) => {
      this.props.setMovie(movie);
      this.fetchCharactersInMovie();
    });
  }

  fetchCharactersInMovie() {
    const ids = this.props.currentMovie.characters.map((characterUrl) => getIdFromUrl(characterUrl));
    CharacterService.listPeople(ids).subscribe((characters) => {
      this.props.setCharacters(
        characters.map((character) => {
          character.isFound = false;
          return character;
        })
      );
    })
  }

  render() {
    if (!this.props.currentMovie) {
      return <div className="quizz-page"></div>
    }
    return (
      <div className="quizz-page">
        <div className="quizz-page-header">
          <img src={`/images/films/${this.props.currentMovie.id}.jpg`} alt={this.props.currentMovie.title} />
          <div className="quizz-page-header-content">
            <h1>Find all characters in {this.props.currentMovie.title}</h1>
            <MovieUserInput characters={this.props.characters} characterIsFound={this.props.setCharacterFound} />
          </div>
        </div>
        <div className="quizz-page-body">
          {this.props.characters.map((character) =>
            <Character key={character.id} character={character} />
          )}
        </div>
        <div className="quizz-page-footer">
          <button onClick={() => this.props.history.push('/home')}>Return to home</button>
          <button onClick={() => this.props.setAllCharactersFound()} >Show all character names</button>
        </div>
      </div >
    )
  }

}

const mapStateToProps = state => {
  return {
    currentMovie: state.movieReducer.currentMovie,
    characters: state.movieReducer.characters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMovie: (value) => {
      dispatch({ type: 'SET_MOVIE', value });
    },
    setCharacters: (value) => {
      dispatch({ type: 'SET_CHARACTERS', value });
    },
    setCharacterFound: (value) => {
      dispatch({ type: 'SET_CHARACTER_FOUND', value });
    },
    setAllCharactersFound: () => {
      dispatch({ type: 'SET_ALL_CHARACTERS_FOUND' });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
