import { useState } from 'react';
import styles from './App.module.scss';
import { DATA } from './data';
import Character from './functionComponents/Character/Character';
// import CCounter from './classComponents/Counter';
// import FCounter from './functionComponents/Counter';

function App() {
  const [ characters ] = useState(DATA)

  return (
    <div className={styles.App}>
      {characters.map((character, index) => index <= 3 ? (
        <Character key={character.id} character={character} />
      ) : (<p key={character.id}>Mayor a el cuarto elemento</p>) )}

      {/*
      <Character img={'https://rickandmortyapi.com/api/character/avatar/238.jpeg'} name={'Mr. Booby Buyer'} />
      <h1>Funcion</h1>
      <FCounter initialCounter={3} />
      <h1>Clase</h1>
      <CCounter initialCounter={3} />
      */}
    </div>
  );
}

export default App;
