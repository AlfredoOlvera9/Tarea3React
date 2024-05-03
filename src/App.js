import GameItem from "./components/GameItem";
import CreateGameButton from "./components/CreateGameButton";
import GameCounter from "./components/GameCounter";
import GameList from "./components/GameList";
import GameSearch from "./components/GameSearch";
import React from 'react'
import { useLocalStorage } from "./hooks/useLocalStorage";


const defaultGames = [
  { text: 'Cuphead', completed: false },
  { text: 'Halo', completed: false },
  { text: 'Forza', completed: false },
  { text: 'Call of duty', completed: false },
  { text: 'Fifa ', completed: false },
]



function App() {


  const[games, saveGames] = useLocalStorage('Games', defaultGames);
  const [searchValue, setSearchValue] = React.useState('');
  const [insertedGame, setInsertedGame] = React.useState('');

  const gamesCompleted = games.filter((game) => game.completed).length;
  const totalGames = games.length;


  const searchedGames = games.filter((game) => 
    game.text.includes(searchValue)
  )


  const completeGame = (text) => {
      const newGames = [...games];
      const gameIndex = newGames.findIndex((game) => game.text === text)
      newGames [gameIndex].completed = true;
      saveGames(newGames);

  }

  const deleteGame = (text) => {
    const newGames = [...games];
    const gameIndex = newGames.findIndex((game) => game.text == text);
    newGames.splice(gameIndex, 1);
    saveGames(newGames);

  }

  React.useEffect(() => {
    if(insertedGame){
       if(games.filter((game) => game.text === insertedGame).length >= 1){
       }

        else {
        let newGames;       
     
          newGames = [
            ...games,
            {text: insertedGame, completed:false}
          ]        
        saveGames(newGames);  
       }
    }
    setInsertedGame('');
  }, [insertedGame])

  return (
    <div className="App">
  
      <GameCounter completed={gamesCompleted} total={totalGames}/>

      <GameSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      
      />

      <GameList>
          {searchedGames.map( (game) => (
            <GameItem
              key={game.text}
              text={game.text}
              completed={game.completed}
              onComplete={() => completeGame(game.text)}
              onDelete={() => deleteGame(game.text)}
            
            />

          ))}
      </GameList>
      
      <CreateGameButton 
        setInsertedGame={setInsertedGame}
      />
    </div>
    
  );
}

export default App;
