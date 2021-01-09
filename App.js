import React from 'react';
import Header from '../Header';
import CharacterList from './CharacterList';
import CharacterMovies from './CharacterMovies';
import CharacterProfile from './CharacterProfile';
import CharacterWorld from './CharacterWorld';

const App = () =>
  <div className='container'>
    <Header/>
    <div className='row'>
      <CharacterList />
      <CharacterProfile />
    </div>
    <div className='row'>
      <CharacterWorld />
      <CharacterMovies />
    </div>
  </div>;

export default App;

