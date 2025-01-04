import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';

const SYMBOLS = ['A',' B','C','D'];
const TOTAL_CARDS = 32;

const generateShuffledCards = () => {
    const deck = SYMBOLS.flatMap(symbol => Array(8).fill(symbol));
    return deck.sort(() => Math.random() - 0.5);
  };

const Card = ({symbol,flipped,onClick}) =>(
    <TouchableOpacity
        style={[styles.card,flipped ? styles.cardFlipped : styles.cardBack]}
        onPress={onClick}
        disabled={flipped}

    >
        {flipped && <Text style={styles.cardText}>{symbol}</Text>}
    </TouchableOpacity>
)


export default function Grid(){
      const [deck, setDeck] = useState([]);
      const [flippedIndices, setFlippedIndices] = useState([]);
      const [matchedIndices, setMatchedIndices] = useState([]);
      const [scores, setScores] = useState({ player1: 0, player2: 0 });
      const [currentPlayer, setCurrentPlayer] = useState(1);

    useEffect(()=>{
        setDeck(generateShuffledCards())
    },[])

    const handleCardClick = (index) =>{
        if(flippedIndices.length<2 && !flippedIndices.includes(index) && !matchedIndices.includes(index))
            setFlippedIndices([...flippedIndices,index]);
    };


    return (
    <View style={styles.container}>
        <View style={styles.gridContainer}>
        {deck.flatMap((symbol,index)=>(
            <Card
                symbol={symbol}
                isFlipped={flippedIndices.includes(index) || matchedIndices.includes(index)}
                onClick={()=>handleCardClick(index)}
            />
        ))}
        </View>
    </View>
    );
};
const styles = StyleSheet.create({
    container:{
        
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'lightblue'
    },
    gridContainer:{
        marginTop:50,
        flexDirection:'row',
        flexWrap:'wrap',
        flex:2,
        backgroundColor:'lightGreen'
    },
    card:{
        width:70,
        height:50,
        margin:10,
    },
    cardFlipped:{
        backgroundColor:'#fff',
        borderWidth:1,
    },
    cardBack:{
        backgroundColor:'hotpink',
    },
    cardText:{
        fontSize:20,
        color:'#fff',
        textAlign:'center'
    }
})