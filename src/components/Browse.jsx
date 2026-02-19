import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

// import Hero from './Hero'

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/* <Hero/> */}
    </div>
  )
}

export default Browse