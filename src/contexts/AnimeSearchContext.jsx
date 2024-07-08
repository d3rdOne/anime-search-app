import { createContext ,useReducer } from 'react'
import AnimeSearchReducer from './AnimeSearchReducer';

const initialState = {
  animeTitle: '',
  animeList: []
}
export const AnimeSearchContext = createContext();

// eslint-disable-next-line react/prop-types
const AnimeSearchContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AnimeSearchReducer , initialState);

  const storeAnimeTitle = (title) => {
    console.log('called')
    dispatch({type: 'STORE_TITLE',payload: title})
  }

  const storeAnimeList = (list) => {
    dispatch({
      type:'STORE_LIST', payload: list
    })
  }

  return (
    <AnimeSearchContext.Provider value={{
      animeTitle: state.animeTitle,
      animeList: state.animeList,
      storeAnimeList,
      storeAnimeTitle
    }}> {children}
    </AnimeSearchContext.Provider>
  )
}

export default AnimeSearchContextProvider