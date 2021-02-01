import React from 'react'
import styled from 'styled-components'

import { FILTER } from './data'
import MovieContext from './MovieContext'
import MovieItem from './MovieItem'

const StyledUl = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
`

function MovieList() {
  return (
    <MovieContext.Consumer>
      {(value) => (
        <>
          <h1>Now playing</h1>
          {FILTER.map((myButton, i) => {
            return (
              <button key={i} value={myButton} onClick={value.Filter}>
                {myButton.split('/')[1].replace('_', ' ').toUpperCase()}
              </button>
            )
          })}

          <StyledUl>
            {value.data.map((item) => {
              return <MovieItem key={item.id} item={item} />
            })}
          </StyledUl>
        </>
      )}
    </MovieContext.Consumer>
  )
}

export default MovieList
