import React , {useState, useEffect} from 'react';
import {Text,View , Animated, StyleSheet, TouchableOpacity} from 'react-native';

const letters = ['A','B','C','D','E','F','G','H'];

export default function Task(){
    const [letter, setLetter] = useState(letters);

    const rotated = ()=>{
        const rotatedArray = [...letter];
        const lastLetter = rotatedArray.shift();
        rotatedArray.push(lastLetter);
        setLetter(rotatedArray)
    }
    // const rotate=()=>{

    // }
    return(
        <View style={styles.container}>
        <View style={styles.innerContainer}>
        <View id="box1Txt" style={styles.box1}><Text>{letter[0]}</Text></View>
        <View id="box2Txt" style={styles.box2}><Text >{letter[1]}</Text></View>
        <View id="box3Txt" style={styles.box3}><Text >{letter[2]}</Text></View>
        <View id="box4Txt" style={styles.box4}><Text >{letter[3]}</Text></View>
        <View id="box5Txt" style={styles.box5}><Text >{letter[4]}</Text></View>
        <View id="box6Txt" style={styles.box6}><Text >{letter[5]}</Text></View>
        <View id="box7Txt" style={styles.box7}><Text >{letter[6]}</Text></View>
        <View id="box8Txt" style={styles.box8}><Text >{letter[7]}</Text></View>
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
        justifyContent:'center',
        alignItems:'center'
    },
    innerContainer:{
        height:'40%',
        width:'70%',
        backgroundColor:'white',
        position:'relative',
    },
    box1:{
        width:50,
        height:50,
        backgroundColor:'lightblue',
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:'20%',
        // marginLeft:'25%',
        bottom:0,
    },
    box2:{
        width:50,
        height:50,
        backgroundColor:'lightblue',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:'20%',
        bottom:0,
        marginLeft:'65%',
        position:'absolute',
    },
    box3:{
        rotate: '270deg',
        width:50,
        height:50,
        backgroundColor:'lightblue',
        marginVertical:'60%',
        justifyContent:'center',
        alignItems:'center',
        right:0,
        position:'absolute',
    },
    box4:{
        rotate:'270deg',
        width:50,
        height:50,
        backgroundColor:'lightblue',
        marginVertical:'30%',
        justifyContent:'center',
        alignItems:'center',
        right:0,
        position:'absolute',
    },
    box5:{
        width:50,
        height:50,
        backgroundColor:'lightblue',
        justifyContent:'center',
        alignItems:'center',
        rotate:'180deg',
        marginHorizontal:'55%',
        top:0,
        position:'absolute',
    },
    box6:{
        width:50,
        height:50,
        backgroundColor:'lightblue',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:'20%',
        rotate:'180deg',
        top:0,
        // marginLeft:'35%',
        position:'absolute',
    },
    box7:{
        rotate:'90deg',
        width:50,
        height:50,
        backgroundColor:'lightblue',
        justifyContent:'center',
        alignItems:'center',
        left:0,
        marginTop:'35%',
        position:'absolute',
    },
    box8:{
        rotate:'90deg',
        width:50,
        height:50,
        backgroundColor:'lightblue',
        justifyContent:'center',
        alignItems:'center',
        left:0,
        marginTop:'65%',
        position:'absolute',
    },
    button:{
        marginTop:30,
        // backgroundColor:'blue'
    }
});