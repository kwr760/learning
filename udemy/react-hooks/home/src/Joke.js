import React from 'react';

import { useFetch } from './hooks';

function Joke() {
  const { setup, punchline } = useFetch('https://official-joke-api.appspot.com/jokes/random', {});

  return (
    <div>
      <h3>Joke od the session</h3>
      <p>{ setup }</p>
      <p><em>{punchline}</em></p>
    </div>
  )
}

export default Joke;
