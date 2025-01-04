import React , {useState, useEffect} from 'react';
import {Text,View , StyleSheet, TouchableOpacity} from 'react-native';
import './style.css';

const colors = ['red','blue','yellow','green'];

export default function Task(){
    const [color, setColor] = useState(colors);

    const rotated = ()=>{
        const rotatedArray = [...color];
        const lastLetter = rotatedArray.pop();
        rotatedArray.unshift(lastLetter);
        setColor(rotatedArray)
    }
   
    return(
        <View style={styles.container}>
        <View style={styles.innerContainer}>
        <View id="box1" style={styles.box1}><Text  style={[styles.box1,{backgroundColor:color[0]}]}>{color[0]}</Text></View>
        <View id="box2" style={styles.box2}><Text style={[styles.box2,{backgroundColor:color[1]}]}>{color[1]}</Text></View>
        <View id="box3" style={styles.box3}><Text  style={[styles.box3,{backgroundColor:color[2]}]}>{color[2]}</Text></View>
        <View id="box4" style={styles.box4}><Text  style={[styles.box4,{backgroundColor:color[3]}]}>{color[3]}</Text></View>
        </View>
        <TouchableOpacity
        onPress={rotated}
        style={styles.button}
        >
            Switch
        </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        height:'100%',
        padding:50,
        backgroundColor:'grey',
    },
    innerContainer:{
        height:200,
        width:300,
        backgroundColor:'white',
        
    },
    box1:{
        textAlign:'center',
        width:100,
        height:50,
        top:0,
        marginLeft:'25%',
        position:'absolute',
    },
    box2:{
        textAlign:'center',
        width:100,
        height:50,
        right:0,
        marginTop:'25%',
        position:'absolute',
    },
    box3:{
        width:100,
        height:50,
        textAlign:'center',
        position:'absolute',
        marginLeft:'25%',
        bottom:0,
    },
    box4:{
        textAlign:'center',
        position:'absolute',
        width:100,
        height:50,
        marginTop:'25%',
        left:0,
    },
    button:{
        
        marginTop:30,
        padding:10,
        alignSelf:'start',
        backgroundColor:'blue',
        color:'#fff'
    }
});