const initStatHome = {
  currentTitle: ' - ',
  films: []
}

const homeReducer = (state = initStatHome, action) => {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return { ...state, currentTitle: action.value };
    case 'SET_FILMS':
      return { ...state, films: action.value }
    default:
      return state;
  }
}

export default homeReducer;
