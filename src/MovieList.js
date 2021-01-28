import React from 'react'
import styled from 'styled-components'

import { FILTER } from './data'
import MovieItem from './MovieItem'

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

      <StyledUl>
        {data.map((item) => {
          return <MovieItem key={item.id} item={item} />
        })}
      </StyledUl>
    </>
  )
}

export default MovieList
