// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const SYMBOLS = ['A', 'B', 'C', 'D']; // Possible symbols on the cards
const TOTAL_CARDS = 32; // Total number of cards in the grid

// Function to shuffle the card symbols
const generateShuffledCards = () => {
  const deck = SYMBOLS.flatMap(symbol => Array(8).fill(symbol));
  return deck.sort(() => Math.random() - 0.5);
};

const Card = ({ symbol, flipped, onClick }) => (
  <TouchableOpacity
    style={[styles.card, flipped ? styles.cardFlipped : styles.cardBack]}
    onPress={onClick}
    disabled={flipped}
  >
    {flipped && <Text style={styles.cardText}>{symbol}</Text>}
  </TouchableOpacity>
);

export default function App() {
  const [deck, setDeck] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [scores, setScores] = useState({ player1: 0, player2: 0 });
  const [currentPlayer, setCurrentPlayer] = useState(1);

  useEffect(() => {
    setDeck(generateShuffledCards());
  }, []);

  const handleCardClick = (index) => {
    if (flippedIndices.length < 2 && !flippedIndices.includes(index) && !matchedIndices.includes(index)) {
      setFlippedIndices([...flippedIndices, index]);
    }
  };

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [first, second] = flippedIndices;
      if (deck[first] === deck[second]) {
        setMatchedIndices((prev) => [...prev, first, second]);
        setScores((prev) => ({
          ...prev,
          [`player${currentPlayer}`]: prev[`player${currentPlayer}`] + 1,
        }));
        setFlippedIndices([]);
      } else {
        setTimeout(() => setFlippedIndices([]), 1000);
        setCurrentPlayer((prev) => (prev === 1 ? 2 : 1));
      }
    }
  }, [flippedIndices]);

  const resetGame = () => {
    setDeck(generateShuffledCards());
    setFlippedIndices([]);
    setMatchedIndices([]);
    setScores({ player1: 0, player2: 0 });
    setCurrentPlayer(1);
  };

  const isGameFinished = matchedIndices.length === TOTAL_CARDS;

  useEffect(() => {
    if (isGameFinished) {
      const winner = scores.player1 > scores.player2 ? 'Player 1' : scores.player1 < scores.player2 ? 'Player 2' : 'No one';
      Alert.alert('Game Over', `${winner} wins!\nPlayer 1: ${scores.player1} - Player 2: ${scores.player2}`);
    }
  }, [isGameFinished]);

  return (
    <View style={styles.container}>
      <View style={styles.scoreBoard}>
        <Text style={styles.scoreText}>Player 1: {scores.player1}</Text>
        <Text style={styles.scoreText}>Player 2: {scores.player2}</Text>
        <Text style={styles.scoreText}>Current Turn: Player {currentPlayer}</Text>
      </View>
      <View style={styles.gridWrapper}>
        <View style={styles.grid}>
          {deck.map((symbol, index) => (
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCACC',
  },
  scoreBoard: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  scoreText: {
    color: '#750550',
    fontSize: 20,
  },
  gridWrapper: {
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
  },
  card: {
    width: 70,
    height: 60,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  cardBack: {
    backgroundColor: '#8D0B41',
  },
  cardFlipped: {
    backgroundColor: '#fff',
    borderWidth: 1,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
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
});
