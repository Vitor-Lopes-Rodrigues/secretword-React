//CSS
import "./App.css";

// REACT
import { useCallback, useState, useEffect } from "react";

//data
import { wordList } from "./data/words";

//components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

//Array de lista para começo,meio,fim
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setguessedLetters] = useState([]);
  const [wrongLetters, setwrongLetters] = useState([]);
  const [guesses, setguesses] = useState(5);
  const [score, setscore] = useState(0);

  const pickWordAndCategory = () => {
    //pegando uma categoria aleatório via words
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);

    //pegando palavra aleatória
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    console.log(word);

    return { word, category };
  };

  //Função para o inicio do jogo
  const startGame = () => {
    const { word, category } = pickWordAndCategory();

    //Creando um array de letras
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(wordLetters);
    console.log(word, category);

    //Setando os status
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  //Processar a letra digitada no input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  //Recomeçar jogo
  const returGame = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver returGame={returGame} />}
    </div>
  );
}

export default App;
