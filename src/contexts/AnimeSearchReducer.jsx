
const AnimeSearchReducer = (state, action) => {
  switch(action.type) {
    case 'STORE_TITLE':
      return {...state , animeTitle: action.payload}
    case 'STORE_LIST':
      return {...state, animeList: action.payload}
    default:
      return state
  }
}

export default AnimeSearchReducer