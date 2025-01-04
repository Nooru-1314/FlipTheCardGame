import { View, Text,StyleSheet,Button, TouchableOpacity, Alert } from 'react-native';
import React, {useState, useEffect} from 'react';
const SYMBOLS = ['A','B','C','D'];
const TOTAL_CARDS = 32;

const generateCards= () =>{
  const deck = SYMBOLS.flatMap(Alphabet => Array(8).fill(Alphabet));
  return deck.sort(() => Math.random() - 0.5);
}

const Card = ({ symbol, flipped, onClick }) => (
  <TouchableOpacity
    style={[styles.card, flipped ? styles.cardFlipped : styles.cardBack]}
    onPress={onClick}
    disabled={flipped}
  >
    { <Text style={styles.cardText}>{symbol}</Text>}
  </TouchableOpacity>
);
const Game2 = () => {
    
    const[deck, setDeck] = useState([]);
    const[flippedIndices,setFlippedIndices] = useState([]);
    const[matchedIndices,setMatchedIndices] = useState([]);
    const[scores, setScores] = useState({Player1:0, Player2:0});
    const[currentPlayer, setCurrentPlayer] = useState(1);


  useEffect(()=>{
    // const getArr = async ()=>{
    // const staticArr = await generateCards();
    // console.log("====PRIT====")
    // console.log(staticArr)
      setDeck(generateCards);
    
    // getArr();
  },[]); 

  const handleCardClick = (index) =>{
    if(flippedIndices.length < 2 && !flippedIndices.includes(index) && !matchedIndices.includes(index))
    {
      setFlippedIndices([...flippedIndices,index]);
    }
  }

  useEffect(()=>{
    if(flippedIndices.length===2){
      const [first, second] = flippedIndices;
      if(deck[first]===deck[second]){
        setMatchedIndices((prev)=>[...prev,first,second]);
        setScores((prev)=>({
          ...prev,
          [`Player${currentPlayer}`]:prev[`Player${currentPlayer}`]+1

        }))
        setFlippedIndices([]);   
      }
      else{
        setTimeout(()=>setFlippedIndices([]),1000);
        setCurrentPlayer((prev)=>{prev===1 ? 2 : 1});
      }
    }
  },[flippedIndices])

  const isGameOver = matchedIndices.length===TOTAL_CARDS;
 useEffect(()=>{
  if(isGameOver){
    const winner = scores.Player1 > scores.Player2 ? "Player 1" : scores.Player1 <scores.Player2? "Player 2" : 'Draw' ;
    Alert.alert('Game Over', `${winner} wins\n Player-1: ${scores.Player1} Player-2: ${scores.Player2}`);
  }
 })
  const resetGame = () =>{
    console.log("reset")
  }
  return (
    <View style={styles.container}>
      <View style={styles.scoreBoard}>
          <Text style={styles.scoreText}>Player 1:{scores.Player1}</Text>
          <Text style={styles.scoreText}>Player 2:{scores.Player2}</Text>
          <Text style={styles.scoreText}>Current Player:{currentPlayer}</Text>
      </View>
      <View style={styles.cardsContainer}>
        <View style={styles.grid}>
        {deck.length>0 && deck.map((symbol, index) => (
          
            <Card
              key={index}
              symbol={symbol}
              flipped={flippedIndices.includes(index) || matchedIndices.includes(index)}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.restartButton} onPress={resetGame}>
        <Text style={styles.restartText}>Restart</Text>
      </TouchableOpacity>
          
    </View>
  );
};

export default Game2

const styles = StyleSheet.create({
  container: {
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCACC',
  },
  scoreBoard: {
    height:'10%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  scoreText: {
    color: '#750550',
    fontSize: 20,
  },
  gridWrapper: {
    height:'70%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1.8,
    shadowRadius: 5,
    elevation: 10,
  },
  grid: {
    height:'100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
  },
  card:{

  },
  cardFlipped:{
    backgroundColor:'#fff',
    borderWidth:1
  },
  cardBack:{
    backgroundColor:'#750550',
  },
  restartButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#750550',
    borderRadius: 5,
  },
  restartText: {
    color: '#fff',
    fontSize: 18,
  },
})