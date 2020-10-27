import React from 'react';
import { connect } from 'react-redux';

function MovieUserInput(props) {

  const handleChange = (event) => {
    const userSearch = event.target.value;
    const peopleToSearch = props.characters.find((character) => {
      return userSearch.toLowerCase() === character.name.toLowerCase();
    });
    if (peopleToSearch) {
      props.setCharacterFound(peopleToSearch.id);
      props.changeUserInput('');
    } else {
      props.changeUserInput(userSearch);
    }
  }
  return (
    <input className="user-input" type="text" value={props.userInput} onChange={handleChange} />
  )
}

const mapStateToProps = state => {
  return {
    userInput: state.movieReducer.userInput,
    characters: state.movieReducer.characters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeUserInput: (value) => {
      dispatch({ type: 'CHANGE_USER_INPUT', value });
    },
    setCharacterFound: (value) => {
      dispatch({ type: 'SET_CHARACTER_FOUND', value });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieUserInput);
