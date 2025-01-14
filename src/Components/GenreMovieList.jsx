/* eslint-disable no-unused-vars */
import React from 'react'

import GenresList from './../Constant/GenresList'
import MovieList from './MovieList'
function GenreMovieList() {
  return (
    <div className='' >
        {GenresList.genere.map((item,index) => index <=4 && (

            <div className='p-8 px-8 md:px-16' key={item.id}>
                <h2 className='text-[20px] text-white font-bold pb-5'>{item.name}</h2>
                <MovieList genreId={item.id} />
            </div>

        ))}
    </div>
  )
}

export default GenreMovieList
