import { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components'

// import ActorList from './ActorList'
// import ClassPlace from './ClassPlace'
// import ACTOR_DATA, { API_URL, FILTER, API_KEY, SETTINGS } from './data.js'
// import Hello from './Hello'
import Bar from './Bar'
import { API_KEY, API_URL, FILTER, MOVIE, SETTINGS } from './data.js'
import MiddleOne from './MiddleOne'
import MovieContext from './MovieContext'
import MovieList from './MovieList'

// import Place from './Place'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

// const list = [
//   {
//     title: 'React',
//     url: 'https://reactjs.org/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: 'Redux',
//     url: 'https://redux.js.org/',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
// ]

// const welcome = {
//   greeting: 'Yo',
//   title: 'FE20',
// }

// const myArray = ["I'm", 'an', 'array']
// const myNumbers = [1, 4, 8]

// function getTitle(title) {
//   return 'From Function' + title
// }

// const map1 = array1.map(x => x * 2);

// function writePTags(arr) {
//   return arr.map(function (x, index) {
//     console.log(x)
//     return <p key={index}>{x}</p>
//   })
// }

// function writePTagsWithoutMap(arr) {
//   let newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(<p key={i}>{arr[i]}</p>)
//   }
//   return newArr
// }

/*
du har data i en variabel innehållandes skådisar.
1. skapa en ny komponent som får vara en listkomponent
2. skapa en ny komponent som får vara itemcomponent
3. det ska resultera i en lista med skådisarna, namn och bild
-- klar!
4. skapa en basic layout för "korten", ett kort per skådis

*/

// const element = <Place location='Kilimanjaro' elevation='1500' />

function App() {
  const [movies, setMovies] = useState([])
  const [filterState, setFilterState] = useState(FILTER[0])

  useEffect(() => {
    // console.log('Hej')
    fetch(API_URL + MOVIE + filterState + API_KEY + SETTINGS)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results)
      })
  }, [filterState])

  const changeFilter = (e) => {
    // setFilterState(e.target.data)
    setFilterState(e.target.value)
  }

  const contextDataObject = {
    data: movies,
    Filter: changeFilter,
  }

  console.log(contextDataObject)
  return (
    <MovieContext.Provider value={contextDataObject}>
      <GlobalStyle />
      <div>
        <h1>My Hacker Stories</h1>

        <label htmlFor='search'>Search: </label>
        <input id='search' type='text' />

        <Bar />
        <MovieList data={movies} handleFilter={changeFilter} />
        <MiddleOne />
      </div>
    </MovieContext.Provider>
  )
}

export default App
