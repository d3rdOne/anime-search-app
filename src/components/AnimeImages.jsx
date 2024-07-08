import axios from 'axios'
import  { useEffect } from 'react'

const AnimeImages = ({id}) => {
  useEffect(() => {
    axios.get(`https://api.jikan.moe/v4/anime/${id}/pictures`).then((response) => {
      console.log(response.data.data)
    })
  }, [])
  return (
    <div>AnimeImages</div>
  )
}

export default AnimeImages