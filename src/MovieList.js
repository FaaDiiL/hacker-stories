import React from 'react'
import styled from 'styled-components'
import MovieItem from './MovieItem'
import { FILTER } from './data'

const StyledUl = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
`

function MovieList({ data, handleFilter }) {
  return (
    <>
      <h1>Now playing</h1>
      {FILTER.map((myButton) => {
        return (
          <button value={myButton} onClick={handleFilter}>
            {myButton.split('/')[1].replace('_', ' ').toUpperCase()}
          </button>
        )
      })}
      {/*<button value={FILTER[0]} onClick={handleFilter}>
        // Now Playing //{' '}
      </button> */}

      {/*'<button value={FILTER[1]} onClick={handleFilter}>
        // Now Playing //{' '}
    </button> */}

      <StyledUl>
        {data.map((item) => {
          return <MovieItem key={item.id} item={item} />
        })}
      </StyledUl>
    </>
  )
}

export default MovieList
