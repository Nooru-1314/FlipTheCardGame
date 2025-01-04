import React, {useState, useEffect} from "react";
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';

function Timer(){
    const[count, setCount] = useState(0);
    const[name, setName] = useState('Noor');

    const onClick= (newTxt)=>{
        setName(newTxt);
    }

    useEffect(()=>{
        let timer = setTimeout(()=>{
            setCount((count)=>count+1);
        },1000);
        return ()=> clearTimeout(timer) 
    },[name]);

    useEffect(()=>{
        return()=>{
            console.log("component will unmount")
        }
    },[])
    
    return(
        <View style={styles.container}>
        <Text style={{marginTop:20 ,fontSize:30}}>I've rendered {count} times!</Text>
        <Text style={{marginTop:20 ,fontSize:30}}>{name}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(newTxt) => onClick(newTxt)}
          placeholder="useless placeholder"
          keyboardType="email-address"
        />
        {/* <Button 
        title="Enter Name"
        onPress={onClick}
        /> */}
        </View>
    );
};

export default Timer

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})