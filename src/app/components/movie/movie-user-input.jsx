import React from 'react';
import { connect } from 'react-redux';

function MovieUserInput(props) {

  const handleChange = (event) => {
    const userSearch = event.target.value;
    const peopleToSearch = props.characters.find((character) => {
      return userSearch.toLowerCase() === character.name.toLowerCase();
    });
    if (peopleToSearch) {
      props.characterIsFound(peopleToSearch.id);
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
    userInput: state.movieReducer.userInput
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeUserInput: (value) => {
      dispatch({ type: 'CHANGE_USER_INPUT', value });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieUserInput);
