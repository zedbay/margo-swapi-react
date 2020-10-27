const initStateMovie = {
  currentMovie: undefined,
  characters: [],
  userInput: ''
}

const movieReducer = (state = initStateMovie, action) => {
  switch (action.type) {
    case 'SET_MOVIE':
      return { ...state, currentMovie: action.value };
    case 'SET_CHARACTERS':
      return { ...state, characters: action.value };
    case 'SET_CHARACTER_FOUND':
      return {
        ...state,
        characters: state.characters.map((character) => character.id === action.value ? { ...character, isFound: true } : character)
      }
    case 'SET_ALL_CHARACTERS_FOUND':
      return {
        ...state,
        characters: state.characters.map((character) => ({ ...character, isFound: true }))
      }
    case 'CHANGE_USER_INPUT':
      return {
        ...state,
        userInput: action.value
      }
    default:
      return state;
  }
}

export default movieReducer;
