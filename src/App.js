//import React from 'react';
import Hello from './Hello';

import Place from './Place';
import ClassPlace from './ClassPlace';
import ACTOR_DATA from './data.js';
import Bar from './Bar';
import ActorList from './ActorList';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
`

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
];


const welcome = {
  greeting: 'Yo',
  title: 'FE20'
};

const myArray = ["I'm", "an", "array"];
const myNumbers = [1, 4, 8];

function getTitle(title) {
  return 'From Function' + title;
}

// const map1 = array1.map(x => x * 2);

function writePTags(arr) {
  return arr.map(function (x, index) {
    console.log(x)
    return (<p key={index}>{x}</p>);
  })
}

function writePTagsWithoutMap(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(<p key={i}>{arr[i]}</p>)
  }
  return newArr
}

/*
du har data i en variabel innehållandes skådisar.
1. skapa en ny komponent som får vara en listkomponent
2. skapa en ny komponent som får vara itemcomponent
3. det ska resultera i en lista med skådisarna, namn och bild
-- klar!
4. skapa en basic layout för "korten", ett kort per skådis

*/


const element = <Place location="Kilimanjaro" elevation="1500" />;

function App() {
  //console.log(ACTOR_DATA)
  return (
    <>
    <GlobalStyle />
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <Bar />
      <Hello />
      <ActorList data={ACTOR_DATA.cast} />

      {/* <ClassPlace location="Kilimanjaro" elevation="1500" />; */}
      {/*list.map(function (item) {
        return (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>);
      })*/}
    </div>
    </>
  );
}


export default App;