import React,{useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

export default function UseState(){
    const [count,setCount] = useState(0);
    const counter=()=>(
        setCount(count+1)
    )
    useEffect(()=>{
        if(count===10){
            console.log("count is 10");
        }
    },[count])

    const Card = ({symbol, onClick})=>{
        return (
          <TouchableOpacity
            style= {[styles.card , flipped ? styles. cardFlipped : styles.cardback ]}
            onPress={onClick}
          >
             <Text>{symbol}</Text>
          </TouchableOpacity>
        )
      }
    return(
        <View>
            <Text style={{fontSize:20}}>Hello. The button is pressed {count} times</Text>
            <Button
            title="increment"
            onPress ={counter}
            style={{marginBottom:15}}
            />
            <Text> The counter is decremented</Text>
            <Button
            title="decrement"
            onPress={()=>setCount(count-1)}
            
            />
        </View>
    );
};
